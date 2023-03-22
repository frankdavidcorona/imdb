import Results from "@/components/Results";

const getMovies = async (searchTerm) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};

export default async function SearchgPage({ params: { searchTerm } }) {
  const { results } = await getMovies(searchTerm);

  if (results && results.lenght === 0)
    return (
      <div>
        <h1 className="text-center pt-6">No results found</h1>
      </div>
    );

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
