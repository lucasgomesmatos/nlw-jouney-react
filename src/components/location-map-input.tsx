import { MapPin } from 'lucide-react';

interface LocationMapInputProps {
  disabled: boolean;
}

export const LocationMapInput = ({ disabled }: LocationMapInputProps) => {
  return (
    <div className="flex gap-2 items-center flex-1">
      <MapPin className="size-5 text-zinc-400" />
      <input
        disabled={disabled}
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        type="text"
        placeholder="Para onde você vai ?"
      />
    </div>
  );
};
