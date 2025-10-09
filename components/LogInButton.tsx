"use client";

import { useFormStatus } from "react-dom";

export default function LogInButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      className={`border-2 rounded-3xl bg-[#e7e3e2] 
          border-neutral-50 text-sm p-3 font-bold
          hover:bg-[#d7d3d0] cursor-pointer
          ${pending && "text-[#b3aab0]"}
          active:scale-95 transition-transform duration-100
          `}
      type="submit"
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}
