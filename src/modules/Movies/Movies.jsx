import { useEffect, useState } from "react";
import { getTrending } from "../../services/api";
// import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getTrending();
        setMovies(response);
        // console.log("response", response);
      } catch (response) {
        console.log("error", response.data.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <ul>
        {movies &&
          movies.map(
            ({
              name,
              original_title,
              id,
              title,
              release_date,
              overview,
              vote_average,
              poster_path,
              backdrop_path,
              genres,
            }) => (
              <Link key={id} to={`/movies/${id}`}>
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={name}
                  />
                  <p>{name || original_title}</p>

                  {/* <MovieCard
                    name={name}
                    title={title}
                    release_date={release_date}
                    overview={overview}
                    vote_average={vote_average}
                    poster_path={poster_path}
                    backdrop_path={backdrop_path}
                    genres={genres}
                    original_title={original_title}
                  /> */}
                </li>
              </Link>
            )
          )}
      </ul>
    </>
  );
};

export default Movies;
