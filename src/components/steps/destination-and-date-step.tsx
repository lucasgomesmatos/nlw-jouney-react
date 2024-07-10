import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import { Button } from '../button';

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  toggleGuestInput: () => void;
}

export const DestinationAndDateStep = ({
  isGuestsInputOpen,
  toggleGuestInput,
}: DestinationAndDateStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex gap-2 items-center flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para onde você vai ?"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          type="text"
          placeholder="Quando?"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button
          onClick={toggleGuestInput}
          className="bg-zinc-800 hover:bg-zinc-700"
        >
          Alterar local/data <Settings2 className="size-5 " />
        </Button>
      ) : (
        <Button
          onClick={toggleGuestInput}
          className="bg-lime-300 text-lime-900 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5 " />
        </Button>
      )}
    </div>
  );
};
