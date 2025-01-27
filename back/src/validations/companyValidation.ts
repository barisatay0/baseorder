import {z} from "zod";

export const CreateValidation = z.object({
    photo_id: z.number().int().min(1),
    company_name: z.string().max(255),
    company_address: z.object({
        latitude: z.number(),
        longitude: z.number(),
    }),
    company_phone: z.string().max(10),
    company_email: z.string().max(255),
})

export const UpdateValidation = CreateValidation.partial();