import db from "@/lib/db";
import Tweet from "../../../components/Tweet";
import Pagination from "../../../components/Pagination";
import { redirect } from "next/navigation";

async function getTweets(page: number) {
  const tweets = await db.tweet.findMany({
    select: {
      id: true,
      tweet: true,
      created_at: true,
      user: {
        select: {
          username: true,
          email: true,
        },
      },
    },
    take: 5,
    skip: 5 * (page - 1),
    orderBy: {
      created_at: "desc",
    },
  });

  return tweets;
}

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await searchParams;
  let page = Number(pageStr);

  if (!page) {
    page = 1;
  }

  const tweets = await getTweets(page);

  return (
    <div className="w-full h-screen bg-[#161e27] *:text-white">
      <div className="h-full flex flex-col p-5 border-1">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            created_at={tweet.created_at.toString()}
            user={tweet.user}
          />
        ))}

        <Pagination page={page} />
      </div>
    </div>
  );
}
