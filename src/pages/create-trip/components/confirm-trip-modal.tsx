import { Button } from '@/src/components/button';
import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';

interface ConfirmTripModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export const ConfirmTripModal = ({
  isOpen,
  toggleModal,
  createTrip,
}: ConfirmTripModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar criação da viagem
                </h2>
                <button type="button">
                  <X className="size-5 text-zinc-400" onClick={toggleModal} />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{' '}
                <span className="text-zinc-100 font-semibold">
                  Florianópolis, Brasil{' '}
                </span>
                nas datas de{' '}
                <span className="text-zinc-100 font-semibold">
                  16 a 27 de Agosto de 2024
                </span>{' '}
                preencha seus dados abaixo:
              </p>
            </div>

            <form onSubmit={createTrip} className="space-y-3">
              <div className="flex gap-2 items-center h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <User className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="flex gap-2 items-center h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Mail className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                  type="email"
                  name="email"
                  placeholder="Seu email pessoal"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                className=" w-full justify-center h-11"
              >
                Confirmar criação da viagem
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
