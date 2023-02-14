import Searchbar from "../../modules/Searchbar/Searchbar"
import { useState, useEffect } from "react";
import Notiflix from "notiflix";
import { searchMovies } from "../../services/api";
import { Link } from "react-router-dom";

const MovieSearch = () => {
     
const [movies, setMovies] = useState([]);

const [query, setQuery] = useState("");
// const [loading, setLoading] = useState(false);
const [, setError] = useState(null);
// const [page, setPage] = useState(1);
// const [, setTotallPages] = useState(0);
// const [per_page] = useState(12);
// // const isFirstRender = useState(true);
// const [showModal, setShowModal] = useState(false);
// const [largeImageURL, setLargeImageURL] = useState(null);

useEffect(() => {
  if (query === "") {
    return;
  }
  const fetchMovieByKeyWord = async ( query) => {
    try {
    //   setLoading(true);
      const response = await searchMovies(query);

      setMovies(response);
    //   setTotallPages(totalHits / per_page);
console.log(response)
      if (response.length === 0) {
        return Notiflix.Notify.failure("Nothing found");
        // console.log(' nothing found');
      }
      console.log("QUERY =>", query);
    } catch (error) {
      setError(error.message);
    } finally {
    //   setLoading(false);
    }
  };
  fetchMovieByKeyWord( query);
}, [query]);

const handleFormSubmit = (query) => {
  setQuery(query);
//   setPage(1);
  setMovies([]);
};





    return (
      <>
        <Searchbar submitPropValue={handleFormSubmit} />
        
        {movies && <ul>
          {movies &&
            movies.map(
              ({
                name,
                original_title,
                id,
                // title,
                // release_date,
                // overview,
                // vote_average,
                poster_path,
                // backdrop_path,
                // genres,
              }) => (
                <Link key={id} to={`/movies/${id}`}>
                  <li>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={name}
                    />
                    <p>{name || original_title}</p>

                  </li>
                </Link>
              )
            )}
        </ul>}
      </>
    );
}
export default MovieSearch;