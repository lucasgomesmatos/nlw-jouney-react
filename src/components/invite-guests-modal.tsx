import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';
import { Button } from './button';

interface InviteGuestsModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export const InviteGuestsModal = ({
  isOpen,
  toggleModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button">
                  <X className="size-5 text-zinc-400" onClick={toggleModal} />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div
                  key={email}
                  className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                >
                  <span>{email}</span>
                  <button
                    type="button"
                    onClick={() => removeEmailToInvite(email)}
                  >
                    <X className="size-4 text-zinc-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-zinc-800" />

            <form
              onSubmit={addNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg"
            >
              <div className="flex gap-2 items-center px-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                />
                <Button
                  type="submit"
                  className="bg-lime-300 text-lime-900 hover:bg-lime-400"
                >
                  Convidar
                  <Plus className="size-5 " />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
