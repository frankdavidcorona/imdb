"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`font-semibold
          ${
            genre && genre === param
              ? `underline decoration-amber-500`
              : `hover:cursor-pointer hover:text-amber-500 hover:underline  decoration-amber-500`
          }
        `}
      >
        {title}
      </Link>
    </div>
  );
}
