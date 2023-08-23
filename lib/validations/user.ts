import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(2, {
      message: "Provide a name",
    })
    .max(30),
  username: z.string().min(2, { message: "Provide a username" }).max(30),
  bio: z.string().min(1, { message: "Provide a short info" }).max(120),
});
