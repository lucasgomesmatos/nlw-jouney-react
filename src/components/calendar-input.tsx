import { Calendar } from 'lucide-react';

interface CalendarInputProps {
  disabled: boolean;
}

export const CalendarInput = ({ disabled }: CalendarInputProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Calendar className="size-5 text-zinc-400" />
      <input
        disabled={disabled}
        className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        type="text"
        placeholder="Quando?"
      />
    </div>
  );
};
