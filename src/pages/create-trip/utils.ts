import { z } from "zod";

export const createTripSchema = z.object({
  destination: z.string({
    message: "Por favor, insira um destino"
  }).min(3, {
    message: "O destino deve ter no mínimo 3 caracteres"
  }),
  eventStartAndEndDates: z.object({
    from: z.string({
      message: "Por favor, insira a data de início"
    }),
    to: z.string({
      message: "Por favor, insira a data de término"
    }),
  }, {
    message: "Por favor, insira a data de início e término"
  }),
  ownerName: z.string({
    message: "Por favor, insira seu nome"
  }).min(3, {
    message: "O nome deve ter no mínimo 3 caracteres"
  }),
  ownerEmail: z.string({
    message: "Por favor, insira seu email"
  }),
  emailsToInvite: z.array(z.string().email(), {
    message: "Por favor, insira um email válido"
  }),
});

export type CreateTripType = z.infer<typeof createTripSchema>;
