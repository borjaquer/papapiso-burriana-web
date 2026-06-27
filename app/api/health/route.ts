import { NextResponse } from 'next/server';

/**
 * GET /api/health
 *
 * Endpoint para keep-alive (UptimeRobot / cron-job.org).
 * Render free tier duerme tras 15 min sin tráfico.
 * Este endpoint es ultraligero para mantener el servicio despierto.
 *
 * UptimeRobot: monitorizar cada 5 minutos.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'apartamentos-burriana',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    }
  );
}
