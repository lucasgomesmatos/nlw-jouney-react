import { Button } from '@/src/components/button';
import { Calendar, MapPin, Settings2 } from 'lucide-react';

export const DestinationAndDateHeader = () => {
  return (
    <header className="px-4 h-16 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100">Belo Horizonte, Brasil</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">17 a 20 de Setembro</span>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button variant="secondary">
          Alterar local/data <Settings2 className="size-5 " />
        </Button>
      </div>
    </header>
  );
};
