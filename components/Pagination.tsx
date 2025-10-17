import Link from "next/link";

export default async function Pagination({ page }: { page: number }) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="w-full fixed bottom-0 left-0 border-t border-[#2e4051] p-3">
      <div className="w-[60%] mx-auto flex justify-between items-center *:text-sm">
        {pages.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`/products?page=${pageNumber}`}
            className={`${
              page === pageNumber && "bg-blue-400 rounded-lg"
            } px-6 py-1`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}
