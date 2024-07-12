import { DateRange } from "react-day-picker"
import { create } from "zustand"

type State = {
  isGuestsInputOpen: boolean
  isGuestsModalOpen: boolean
  isConfirmTripModalOpen: boolean

  emailsToInvite: string[]
  destination: string
  ownerName: string
  ownerEmail: string
  eventStartAndEndDates: DateRange | undefined
}

type Action = {
  updateIsGuestsInputOpen: () => void
  updateIsGuestsModalOpen: () => void
  updateIsConfirmTripModalOpen: () => void
  addEmailToInvite: (email: string) => void
  removeEmailToInvite: (email: string) => void

  addDestination: (destination: string) => void
  addOwnerName: (ownerName: string) => void
  addOwnerEmail: (ownerEmail: string) => void
  addEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export const createTripStore = create<State & Action>((set) => ({
  isGuestsInputOpen: false,
  isGuestsModalOpen: false,
  isConfirmTripModalOpen: false,

  emailsToInvite: [],
  destination: '',
  ownerName: '',
  ownerEmail: '',
  eventStartAndEndDates: undefined,

  updateIsGuestsInputOpen: () => set((state) => ({ isGuestsInputOpen: !state.isGuestsInputOpen })),
  updateIsGuestsModalOpen: () => set((state) => ({ isGuestsModalOpen: !state.isGuestsModalOpen })),
  updateIsConfirmTripModalOpen: () => set((state) => ({ isConfirmTripModalOpen: !state.isConfirmTripModalOpen })),

  
  addEmailToInvite: (email) => set((state) => ({ emailsToInvite: [...state.emailsToInvite, email] })),
  removeEmailToInvite: (email) => set((state) => ({ emailsToInvite: state.emailsToInvite.filter((item) => item !== email)})),

  addDestination: (destination) => set({ destination }),
  addOwnerName: (ownerName) => set({ ownerName }),
  addOwnerEmail: (ownerEmail) => set({ ownerEmail }),
  addEventStartAndEndDates: (dates) => set({ eventStartAndEndDates: dates})


}))