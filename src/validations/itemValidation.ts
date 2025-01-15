import {z} from "zod";

export const CreateValidation = z.object({
    category_id: z.number().int().min(1),
    photo_id: z.number().int().min(1),
    item_status: z.boolean().optional(),
    item_name: z.string().max(255),
    item_price: z.number().min(0),
    item_description: z.string().max(255),
    item_specification: z.string().max(255),
})

export const UpdateValidation = CreateValidation.partial();