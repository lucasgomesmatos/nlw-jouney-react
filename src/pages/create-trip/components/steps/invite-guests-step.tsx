import { Button } from '@/src/components/button';
import { ArrowRight, UserRoundPlus } from 'lucide-react';

interface InviteGuestsStepProps {
  isGuestsInputOpen: boolean;
  toggleGuestModal: () => void;
  emailsToInvite: string[];
  handleConfirmTripModal: () => void;
}

export const InviteGuestsStep = ({
  isGuestsInputOpen,
  toggleGuestModal,
  emailsToInvite,
  handleConfirmTripModal,
}: InviteGuestsStepProps) => {
  return (
    <>
      {' '}
      {isGuestsInputOpen && (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <button
            type="button"
            onClick={toggleGuestModal}
            className="flex gap-2 items-center flex-1"
          >
            <UserRoundPlus className="size-5 text-zinc-400" />
            {emailsToInvite.length > 0 ? (
              <span className="text-zinc-100 text-lg flex-1 text-left">
                {emailsToInvite.length} pessoa(s) convidada(s)
              </span>
            ) : (
              <span className="text-zinc-400 text-lg flex-1 text-left">
                Quem estará na viagem?
              </span>
            )}
          </button>

          <div className="w-px h-6 bg-zinc-800" />

          <Button onClick={handleConfirmTripModal} variant="primary">
            Confirmar viagem
            <ArrowRight className="size-5 " />
          </Button>
        </div>
      )}
    </>
  );
};
