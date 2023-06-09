import { useEffect, useState } from "react";
import Movie from "../Components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            // <div key={movie.id}>
            //   <img src={movie.medium_cover_image} alt={movie.title}></img>
            //   <h2>{movie.title}</h2>
            //   <p>{movie.summary}</p>
            //   <ul>
            //     {movie.genres.map((genres) => (
            //       <li key={genres}>{genres}</li>
            //     ))}
            //   </ul>
            // </div>
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
