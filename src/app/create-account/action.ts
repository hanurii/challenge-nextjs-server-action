"use server";

import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkEmail = (email: string) => {
  if (email.includes("zod.com")) {
    return true;
  }

  return false;
};

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "username 이 너무 짧습니다. 3자 이상 적어주세요."),
    email: z.email().refine(checkEmail, "@zod.com 이메일만 허용됩니다."),
    password: z.string().min(4),
    confirm_password: z.string().min(4),
  })
  .superRefine(async (data, ctx) => {
    // 동일한 uesrname 이 있는지 확인
    const user = await db.user.findUnique({
      where: {
        username: data.username,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "동일한 username이 존재합니다.",
        path: ["username"],
      });

      return;
    }

    // 사용중인 email이 있는지 확인
    const user2 = await db.user.findUnique({
      where: {
        email: data.email,
      },
      select: {
        id: true,
      },
    });

    if (user2) {
      ctx.addIssue({
        code: "custom",
        message: "이미 사용중인 email 입니다.",
        path: ["email"],
      });

      return;
    }

    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Password와 Confirm Password가 일치하지 않습니다.",
        path: ["confirm_password"],
      });
    }
  });

export async function createAccountV2(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return z.flattenError(result.error);
  }
  // password 해쉬
  const hashedPassword = await bcrypt.hash(result.data.password, 12);

  // user 생성
  const user = await db.user.create({
    data: {
      username: result.data.username,
      email: result.data.email,
      password: hashedPassword,
    },
  });

  // 로그인 쿠키 생성
  const session = await getSession();
  session.id = user.id;
  await session.save();

  // 리다이렉트
  redirect("/profile");
}
