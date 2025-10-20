"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { addTweet } from "./actions";

export default function AddTweet() {
  const [preview, setPreview] = useState("");
  const [state, action] = useActionState(addTweet, null);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="w-full h-screen bg-[#161e27] *:text-white p-25">
      <div className="border-1 flex flex-col border-[#364b62] rounded-xl">
        <form action={action}>
          <div className="border-b-1 flex justify-between p-3 border-[#364b62]">
            <Link
              href="/"
              className="flex items-center justify-center -ml-2 w-12 text-sm size-8 text-blue-400 font-semibold hover:bg-[#133f6d] hover:p-1 hover:rounded-full"
            >
              취소
            </Link>
            <button className="bg-blue-500 text-xs p-1.5 rounded-2xl cursor-pointer hover:bg-blue-600 transition-colors">
              게시하기
            </button>
          </div>
          <div className={`flex flex-col ${!preview && "h-55"}`}>
            <textarea
              className="w-full p-4 outline-0 resize-none overflow-hidden field-sizing-content"
              name="tweet"
              placeholder="무슨 일이 일어나고 있나요?"
              maxLength={250}
            ></textarea>
            <div className="px-4 text-red-400">{state?.fieldErrors.tweet}</div>
            {preview ? (
              <div className="w-[50%] px-4 py-2">
                <div
                  className="size-35 bg-center bg-cover object-cover border-dashed border-orange-300 border-1"
                  style={{
                    backgroundImage: `url(${preview})`,
                  }}
                />
              </div>
            ) : null}
          </div>
          <div className="border-t-1 p-2 cursor-pointer border-[#364b62]">
            <div className="size-10 p-2 hover:bg-[#133f6d] hover:rounded-full hover:flex hover:items-center hover:justify-center">
              <label className="cursor-pointer" htmlFor="photo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-blue-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </label>

              <input
                onChange={onChangeImage}
                className="hidden"
                type="file"
                id="photo"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
