"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import z from "zod";

const tweetSchema = z.object({
  tweet: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "this field is required" : "Not a string",
    })
    .min(1)
    .max(250),
});

export async function addTweet(prevState: any, formData: FormData) {
  const data = {
    tweet: formData.get("tweet"),
  };

  const result = z.safeParse(tweetSchema, data);

  if (!result.success) {
    return z.flattenError(result.error);
  } else {
    const session = await getSession();
    if (session.id) {
      await db.tweet.create({
        data: {
          tweet: result.data.tweet,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
      });

      redirect("/");
    } else {
      alert("로그인 세션이 만료되었습니다.");
      redirect("log-in");
    }
  }
}
