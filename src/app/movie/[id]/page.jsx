import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

async function getMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return await response.json();
}

export default async function MoviePage({ params: { id } }) {
  const movie = await getMovie(id);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row max-w-6xl mx-auto md:space-x-6 gap-3">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h1>
          <p className="text-md">
            <span className="font-semibold mr-1">Overview:</span>{" "}
            {movie.overview}
          </p>
          <p className="flex">
            <span className="font-semibold mr-1">Release Date:</span>
            {movie.release_date || movie.first_air_date}
            <HandThumbUpIcon className="w-5 h-5 ml-4 mr-1" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
