import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  const cookieStore = await cookies();
  return await getIronSession<SessionContent>(cookieStore, {
    cookieName: "carrot",
    password: process.env.COOKIE_PASSWORD as string,
  });
}
