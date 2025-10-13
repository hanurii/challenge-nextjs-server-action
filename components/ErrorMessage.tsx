"use client";

export default function ErrorMessage({ messages }: { messages: string[] }) {
  return messages.map((message, index) => (
    <div key={index} className="text-red-500 text-xs">
      {message}
    </div>
  ));
}
