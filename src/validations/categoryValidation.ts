import {z} from "zod";

export const CreateValidation = z.object({
    photo_id : z.number().int().min(1),
    category_name : z.string().max(255),
    category_description : z.string().max(255),
})

export const UpdateValidation = CreateValidation.partial();