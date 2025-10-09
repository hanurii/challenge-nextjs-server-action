export default function Home() {
  return (
    <div className="">
      <img
        className="w-12 h-12 block my-0 mx-auto mb-10 mix-blend-multiply"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6yr7sXCI_7Qz0uOtVA54Hm7Ghfyif-RdzdMaPIRMPKYQ7gR0"
        alt="image"
      />

      <form className="flex flex-col gap-3">
        <div className="inputBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#716a78"
            className="size-4"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>

          <input placeholder="Email" />
        </div>
        <div className="inputBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#716a78"
            className="size-4"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>

          <input placeholder="Username" />
        </div>
        <div className="inputBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#716a78"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>

          <input placeholder="Password" />
        </div>

        {/* fail msg */}
        <div className="text-red-500 text-xs">Wrong password</div>
        {/* Loading 상태 구현 */}

        <button
          className="border-2 rounded-3xl bg-[#e7e3e2] 
          border-neutral-50 text-sm p-3 font-bold text-[#827b7f]"
          type="submit"
        >
          Log in
        </button>

        {/* success msg */}
        <div className="flex items-center gap-2 bg-[#02b37a] p-4 rounded-xl text-sm font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>Welcome back!</span>
        </div>
      </form>
    </div>
  );
}
