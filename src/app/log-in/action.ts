"use server";

import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const formSchema = z
  .object({
    email: z.email(),
    password: z.string().min(4),
  })
  .superRefine(async (data, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      ctx.addIssue({
        code: "custom",
        message: "email 정보를 찾을 수 없습니다.",
        path: ["email"],
      });
    }

    if (user) {
      const ok = await bcrypt.compare(data.password, user.password!);

      if (!ok) {
        ctx.addIssue({
          code: "custom",
          message: "비밀번호가 일치하지 않습니다.",
          path: ["password"],
        });

        return;
      }

      const session = await getSession();
      session.id = user.id;
      await session.save();

      redirect("/profile");
    }
  });

export default async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    console.log("result", z.flattenError(result.error));
    return z.flattenError(result.error);
  }
}
