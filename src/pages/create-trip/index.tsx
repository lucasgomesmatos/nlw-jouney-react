import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@/src/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { ConfirmTripModal } from './components/confirm-trip-modal';
import { Footer } from './components/footer';
import { InviteGuestsModal } from './components/invite-guests-modal';
import { DestinationAndDateStep } from './components/steps/destination-and-date-step';
import { InviteGuestsStep } from './components/steps/invite-guests-step';
import { createTripStore } from './store/create-trip-store';

export const CreateTripPage = () => {
  const navigate = useNavigate();

  const {
    addEmailToInvite,
    emailsToInvite,
    destination,
    eventStartAndEndDates,
    ownerName,
    ownerEmail,
  } = createTripStore();

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (email && !emailsToInvite.includes(email)) {
      addEmailToInvite(email);
    }

    event.currentTarget.reset();
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => {
      return api.post('/trips', {
        destination,
        starts_at: eventStartAndEndDates?.from,
        ends_at: eventStartAndEndDates?.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
      });
    },
  });

  const createTip = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !destination ||
      !eventStartAndEndDates?.from ||
      !eventStartAndEndDates?.to ||
      emailsToInvite.length === 0 ||
      !ownerName ||
      !ownerEmail
    ) {
      return;
    }

    const response = await mutateAsync();

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
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
          <DestinationAndDateStep />
          <InviteGuestsStep />
        </div>
        <Footer />
      </div>
      <InviteGuestsModal addNewEmailToInvite={addNewEmailToInvite} />
      <ConfirmTripModal createTrip={createTip} isLoading={isPending} />
    </div>
  );
};
