import { Button } from '@/src/components/button';
import { api } from '@/src/lib/axios';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Activities } from './components/activities';
import { CreateActivityModal } from './components/create-activity-modal';
import { DestinationAndDateHeader } from './components/destination-and-date-header';
import { Guests } from './components/guests';
import { ImportantLinks } from './components/important-links';

export const TripDetailsPage = () => {
  const { tripId } = useParams();

  api.get(`/trips/${tripId}`);

  const [isCreatingActivityModalOpen, setIsCreatingActivityModalOpen] =
    useState(false);

  const toggleCreatingActivityModal = () =>
    setIsCreatingActivityModalOpen(!isCreatingActivityModalOpen);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button
              onClick={toggleCreatingActivityModal}
              className="bg-lime-300 text-lime-900 hover:bg-lime-400"
            >
              <Plus className="size-5 " />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      <CreateActivityModal
        isCreatingActivityModalOpen={isCreatingActivityModalOpen}
        toggleCreatingActivityModal={toggleCreatingActivityModal}
      />
    </div>
  );
};
