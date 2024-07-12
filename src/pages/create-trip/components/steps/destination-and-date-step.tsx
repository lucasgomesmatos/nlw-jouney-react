import { Button } from '@/src/components/button';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { createTripStore } from '../../store/create-trip-store';

export const DestinationAndDateStep = () => {
  const {
    isGuestsInputOpen,
    updateIsGuestsInputOpen,
    eventStartAndEndDates,
    addEventStartAndEndDates,
    destination,
    addDestination,
  } = createTripStore();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const toggleDatePicker = () => setIsDatePickerOpen(!isDatePickerOpen);

  const displayDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d 'de' LLLL", {
          locale: ptBR,
        })
          .concat(' até ')
          .concat(
            format(eventStartAndEndDates.to, "d 'de' LLLL", {
              locale: ptBR,
            }),
          )
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex gap-2 items-center flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para onde você vai ?"
          value={destination}
          onChange={(event) => addDestination(event.target.value)}
        />
      </div>
      <button
        onClick={toggleDatePicker}
        disabled={isGuestsInputOpen}
        data-width={displayDate}
        className="flex gap-2 items-center text-left  data-[width]:flex-1"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span
          title={displayDate || 'Quando ?'}
          className="text-lg text-zinc-400 flex-1 truncate "
        >
          {displayDate || 'Quando ?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className=" rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Selecionar data da viagem
                </h2>
                <button type="button">
                  <X
                    className="size-5 text-zinc-400"
                    onClick={toggleDatePicker}
                  />
                </button>
              </div>
            </div>

            <DayPicker
              locale={ptBR}
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={addEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button onClick={updateIsGuestsInputOpen} variant="secondary">
          Alterar local/data <Settings2 className="size-5 " />
        </Button>
      ) : (
        <Button onClick={updateIsGuestsInputOpen} variant="primary">
          Continuar
          <ArrowRight className="size-5 " />
        </Button>
      )}
    </div>
  );
};
