import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg transition-opacity duration-200 hover:opacity-80"
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2 flex flex-col gap-2 dark:text-slate-100">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-md font-bold">
            {result.title || result.original_name || result.original_title}
          </h2>
          <p className="flex items-center text-sm">
            {result.release_date || result.first_air_date}
            <HandThumbUpIcon className="w-5 h-5 ml-4 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
