import {z} from "zod";

export const CreateValidation = z.object({
    photo_path: z.string(),
    photo_extension: z.string().max(5),
})

export const UpdateValidation = CreateValidation.partial();