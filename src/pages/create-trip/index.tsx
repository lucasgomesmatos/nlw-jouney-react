import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmTripModal } from '../../components/confirm-trip-modal';
import { Footer } from '../../components/footer';
import { InviteGuestsModal } from '../../components/invite-guests-modal';
import { DestinationAndDateStep } from '../../components/steps/destination-and-date-step';
import { InviteGuestsStep } from '../../components/steps/invite-guests-step';

export const CreateTripPage = () => {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    'lucasgomesmatosdev@gmail.com',
  ]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const toggleGuestInput = () => setIsGuestsInputOpen(!isGuestsInputOpen);

  const toggleGuestModal = () => setIsGuestsModalOpen(!isGuestsModalOpen);

  const handleConfirmTripModal = () =>
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen);

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (email && !emailsToInvite.includes(email)) {
      setEmailsToInvite([...emailsToInvite, email]);
    }

    event.currentTarget.reset();
  };

  const removeEmailToInvite = (email: string) =>
    setEmailsToInvite(emailsToInvite.filter((item) => item !== email));

  const createTip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/trips/1');
  };

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
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            toggleGuestInput={toggleGuestInput}
          />
          <InviteGuestsStep
            isGuestsInputOpen={isGuestsInputOpen}
            emailsToInvite={emailsToInvite}
            toggleGuestModal={toggleGuestModal}
            handleConfirmTripModal={handleConfirmTripModal}
          />
        </div>
        <Footer />
      </div>
      <InviteGuestsModal
        isOpen={isGuestsModalOpen}
        addNewEmailToInvite={addNewEmailToInvite}
        toggleModal={toggleGuestModal}
        emailsToInvite={emailsToInvite}
        removeEmailToInvite={removeEmailToInvite}
      />

      <ConfirmTripModal
        isOpen={isConfirmTripModalOpen}
        toggleModal={handleConfirmTripModal}
        createTrip={createTip}
      />
    </div>
  );
};
