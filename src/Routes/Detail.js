import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title}></img>
      <h1>{movie.title}</h1>
      <h3>{movie.genres}</h3>
      <p>{movie.description_full}</p>
    </div>
  );
};

export default Detail;
