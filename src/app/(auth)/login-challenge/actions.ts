"use server";

import { z } from "zod";

const passwordRegex = /^(?=.*\d).+$/;

const formSchema = z.object({
  email: z
    .email()
    .refine(
      (email) => email.includes("@zod.com"),
      "Only @zod.com emails are allowed"
    ),
  username: z.string().min(5, "Username sould be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long.")
    .regex(passwordRegex, {
      error: "Password should contain at least one number (0123456789).",
    }),
});

type ActionState = {
  fieldErrors?: {
    email?: string[];
    username?: string[];
    password?: string[];
  };
  formErrors?: string[];
  success?: boolean;
} | null;

export async function createAccount(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    console.log(z.flattenError(result.error));
    return z.flattenError(result.error);
  }

  return { success: true };
}
