'use client';

import dynamic from 'next/dynamic';

const AvailabilityCalendar = dynamic(
  () => import('@/components/AvailabilityCalendar'),
  { ssr: false }
);

export default function CalendarWrapper() {
  return <AvailabilityCalendar />;
}
