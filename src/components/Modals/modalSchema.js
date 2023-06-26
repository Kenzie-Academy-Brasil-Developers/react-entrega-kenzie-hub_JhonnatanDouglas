import { z } from "zod"

export const modalSchema = z.object({
  status: z.string().nonempty("Obrigatório selecionar um Módulo"),
})
