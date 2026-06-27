'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP || '34622738667';

export default function AvailabilityCalendar() {
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIcalData() {
      try {
        const res = await fetch('/api/availability');
        const data = await res.json();
        setBlockedDates(data.blockedDates.map((d: string) => new Date(d + 'T12:00:00')));
      } catch (err) {
        console.error('Error fetching availability:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchIcalData();
  }, []);

  if (loading) return (
    <div className="text-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal mx-auto"></div>
      <p className="mt-2 text-midnight/60 text-sm">Cargando disponibilidad...</p>
    </div>
  );

  return (
    <section id="calendario" className="bg-white rounded-2xl shadow-lg shadow-midnight/5 p-6 md:p-8 max-w-2xl mx-auto border border-midnight/5">
      <h3 className="font-display text-2xl font-semibold mb-2 text-midnight">
        Disponibilidad
      </h3>
      <p className="text-midnight/60 mb-6 text-sm">
        Selecciona las fechas de tu estancia. En gris están ya reservadas.
      </p>

      <DatePicker
        selected={checkIn}
        onChange={(dates: [Date | null, Date | null]) => {
          const [start, end] = dates;
          setCheckIn(start);
          setCheckOut(end);
        }}
        startDate={checkIn}
        endDate={checkOut}
        excludeDates={blockedDates}
        selectsRange
        inline
        minDate={new Date()}
        monthsShown={2}
      />

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={() => {
            const msg = checkIn && checkOut
              ? `Hola 👋 Quiero reservar el Papa Piso Playa Burriana desde el ${checkIn.toLocaleDateString('es-ES')} hasta el ${checkOut.toLocaleDateString('es-ES')} para [X] personas. ¿Está disponible?`
              : 'Hola 👋 Me interesa alquilar el Papa Piso Playa Burriana. ¿Me puedes informar?';
            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
          }}
          className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md shadow-teal/20"
        >
          {checkIn && checkOut ? 'Enviar solicitud por WhatsApp' : 'Consultar disponibilidad'}
        </button>

        {/* Leyenda */}
        <div className="flex items-center gap-4 text-sm text-midnight/50 justify-center">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-foam inline-block"></span> Disponible
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-midnight/20 inline-block"></span> Reservado
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-teal inline-block"></span> Tu selección
          </span>
        </div>
      </div>
    </section>
  );
}
