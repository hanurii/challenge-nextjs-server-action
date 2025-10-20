"use client";

import { useActionState } from "react";
import login from "./action";

export default function LogIn() {
  const [state, dispatch] = useActionState(login, null);

  return (
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center p-24">
        <div className="border-2 p-12 flex flex-col">
          <span className="font-bold text-2xl">안녕하세요!</span>
          <span className="font-bold text-lg">
            Log in with email and password.
          </span>
          <form className="flex flex-col gap-2 mt-4" action={dispatch}>
            <input
              className="border-2 rounded-lg px-2 py-1 text-sm focus:border-blue-400 
focus:ring-4 focus:ring-blue-400 focus:ring-offset-0;"
              type="email"
              name="email"
              placeholder="Email"
            />
            {state?.fieldErrors.email && <div>{state.fieldErrors.email}</div>}
            <input
              className="border-2 rounded-lg px-2 py-1 text-sm focus:border-blue-400 
focus:ring-4 focus:ring-blue-400 focus:ring-offset-0;"
              type="password"
              name="password"
              placeholder="Password"
            />
            {state?.fieldErrors.password && (
              <div>{state.fieldErrors.password}</div>
            )}
            <button
              className="
        bg-blue-400 p-1 rounded-lg text-black text-sm cursor-pointer
        hover:bg-blue-500 transition-colors duration-300 ease-in-out"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
