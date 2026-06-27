import { NextResponse } from 'next/server';

const ICAL_URLS = [
  process.env.AIRBNB_ICAL_URL || '',
  process.env.BOOKING_ICAL_URL || '',
].filter(Boolean);

export async function GET() {
  const blockedDates: string[] = [];

  for (const url of ICAL_URLS) {
    try {
      const response = await fetch(url, { next: { revalidate: 1800 } }); // Cache 30 min
      const icsData = await response.text();

      // Parse manual del ICS (formato estándar RFC 5545)
      const lines = icsData.split('\n');
      let inEvent = false;

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === 'BEGIN:VEVENT') inEvent = true;
        if (trimmed === 'END:VEVENT') inEvent = false;

        // Capturar DTSTART (fecha inicio de reserva)
        if (inEvent && (trimmed.startsWith('DTSTART;VALUE=DATE:') || trimmed.startsWith('DTSTART:'))) {
          const dateStr = trimmed.replace(/^DTSTART(;VALUE=DATE)?:/, '').substring(0, 8);
          if (dateStr.length === 8) {
            const year = dateStr.substring(0, 4);
            const month = dateStr.substring(4, 6);
            const day = dateStr.substring(6, 8);
            blockedDates.push(`${year}-${month}-${day}`);
          }
        }

        // Capturar DTEND (check-out - también se bloquea)
        if (inEvent && (trimmed.startsWith('DTEND;VALUE=DATE:') || trimmed.startsWith('DTEND:'))) {
          const dateStr = trimmed.replace(/^DTEND(;VALUE=DATE)?:/, '').substring(0, 8);
          if (dateStr.length === 8) {
            const year = dateStr.substring(0, 4);
            const month = dateStr.substring(4, 6);
            const day = dateStr.substring(6, 8);
            blockedDates.push(`${year}-${month}-${day}`);
          }
        }
      }
    } catch (err) {
      console.error(`Error fetching iCal from ${url}:`, err);
    }
  }

  // Deduplicar fechas
  const unique = [...new Set(blockedDates)].sort();

  return NextResponse.json({
    blockedDates: unique,
    lastUpdated: new Date().toISOString(),
  });
}
