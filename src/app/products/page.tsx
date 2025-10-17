export default function Products() {
  return (
    <div className="w-full h-screen bg-[#161e27] *:text-white">
      <div className="h-full flex flex-col p-5 border-1">
        <div className="p-5 border-1 border-[#2e4051]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">최한울</span>
            <span className="text-xs text-gray-400">han95210@naver.com</span>
            <span className="text-xs text-gray-400">1일 전</span>
          </div>
          <div>
            <p className="text-sm">첫 트윗입니다</p>
          </div>
          <div className="flex gap-5 mt-4 *:text-[#788ea5]">
            <div className="flex items-center gap-1">
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span className="text-xs">3</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span className="text-xs">5</span>
            </div>
          </div>
        </div>

        <div className="w-full fixed bottom-0 left-0 border-t border-[#2e4051] p-3">
          <div className="w-[60%] mx-auto flex justify-between">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
