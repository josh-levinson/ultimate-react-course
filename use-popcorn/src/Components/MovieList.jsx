import Movie from "./Movie";

export default function MovieList({ movies, isLoading, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))
      )}
    </ul>
  );
}
