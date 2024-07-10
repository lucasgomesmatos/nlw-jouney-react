import { ArrowRight, Settings2, UserRoundPlus } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/button';
import { CalendarInput } from './components/calendar-input';
import { Footer } from './components/footer';
import { LocationMapInput } from './components/location-map-input';

export const App = () => {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  const handleGuestInput = () => setIsGuestsInputOpen(!isGuestsInputOpen);

  return (
    <div className="w-full h-svh flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex items-center flex-col gap-3">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300 text-lg ">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <LocationMapInput disabled={isGuestsInputOpen} />
            <CalendarInput disabled={isGuestsInputOpen} />
            <div className="w-px h-6 bg-zinc-800" />
            {isGuestsInputOpen ? (
              <Button
                onClick={handleGuestInput}
                className="bg-zinc-800 hover:bg-zinc-700"
              >
                Alterar local/data <Settings2 className="size-5 " />
              </Button>
            ) : (
              <Button
                onClick={handleGuestInput}
                className="bg-lime-300 text-lime-900 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5 " />
              </Button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex gap-2 items-center flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  type="text"
                  placeholder="Quem estará na viagem?"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />

              <Button className="bg-lime-300 text-lime-900 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5 " />
              </Button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
