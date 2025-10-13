import { PrismaClient } from "@/lib/generated/prisma";

const db = new PrismaClient();

async function test() {
  const user = await db.user.create({
    data: {
      username: "hanul",
    },
  });

  const tweet = await db.tweet.create({
    data: {
      tweet: "prisma very useful!",
      userId: 1,
    },
  });

  const like = await db.like.create({
    data: {
      userId: 1,
      tweetId: 1,
    },
  });

  console.log("user", user);
  console.log("tweet", tweet);
  console.log("like", like);
}

export default db;
