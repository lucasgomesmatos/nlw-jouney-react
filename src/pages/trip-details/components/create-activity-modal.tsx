import { Button } from '@/src/components/button';
import { Calendar, Tag, X } from 'lucide-react';

interface CreateActivityModalProps {
  isCreatingActivityModalOpen: boolean;
  toggleCreatingActivityModal: () => void;
}

export const CreateActivityModal = ({
  isCreatingActivityModalOpen,
  toggleCreatingActivityModal,
}: CreateActivityModalProps) => {
  return (
    <>
      {' '}
      {isCreatingActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button">
                  <X
                    className="size-5 text-zinc-400"
                    onClick={toggleCreatingActivityModal}
                  />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>

            <form onSubmit={() => {}} className="space-y-3">
              <div className="flex gap-2 items-center h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Tag className="size-5 text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  type="text"
                  name="title"
                  placeholder="Qual a atividade?"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-1 gap-2 items-center h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                  <Calendar className="size-5 text-zinc-400" />
                  <input
                    className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Data e horário da atividade"
                  />
                </div>
              </div>
              <Button type="submit" className=" w-full justify-center h-11">
                Salvar atividade
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
