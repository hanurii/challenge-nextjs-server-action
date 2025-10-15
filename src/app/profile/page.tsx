import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });

    return user;
  }

  notFound();
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      <h1>Profile</h1>
      <div>username: {user?.username}</div>
      <div>email: {user?.email}</div>
    </div>
  );
}
