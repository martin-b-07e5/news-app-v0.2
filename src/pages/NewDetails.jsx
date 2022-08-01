import styles from "./NewDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // esto es un hook
import { Spinner } from "../components/Spinner";
// import { getDataAPI } from "../utils/httpClient";
import { getDataAPI } from "../services/getDataAPI";
import { getNewImg } from "../utils/getNewImg";

// componente para mostrar detalles de la película.
export function NewDetails() {
  // https://reactrouter.com/docs/en/v6/hooks/use-params
  const { newId } = useParams(); // para capturar el identificador » usamos el hook "useParams"
  const [isLoading, setIsLoading] = useState(true); // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [noticia, setNoticia] = useState(null); // 👆El estado inicial de isLoading es true (cdo se cargue el componente (en el get de useEffect) » la película va a estar cargando).

  // llamada asíncrona, para traer pelicula con identificador "newId" del servidor.
  useEffect(() => {
    setIsLoading(true); // para spinner
    getDataAPI("/movie/" + newId).then((data) => {
      setIsLoading(false); // cdo se terminó la carga de la pelicula.
      setNoticia(data);
    });
  }, [newId]);

  if (isLoading) {
    return <Spinner />;
  }

  // const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const imageUrl = getNewImg(noticia.poster_path, 500);
  const imdbUrl = "https://www.imdb.com/title/" + noticia.imdb_id;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.newImage}`}
        src={imageUrl}
        alt={noticia.title}
      />
      <div className={`${styles.col} ${styles.newDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {noticia.title}
        </p>
        <p>
          <strong>Release: </strong> {noticia.release_date}
        </p>
        <p>
          <strong>Genre: </strong>
          {noticia.genres.map((genre) => genre.name).join(", ")}.
          {/* 👆convertimos el arreglo de objetos a un arreglo de texto */}
          {/* si concateno y no utilizo .join  » me agrega una coma al final */}
        </p>
        <p>
          <strong>IMDb RATING:</strong> {noticia.vote_average}
        </p>
        <p>
          <strong>Description:</strong> {noticia.overview}
        </p>
        <p>
          <a href={noticia.homepage} target="_blank" rel="noreferrer">
            {/* {movie.homepage} */} {/* no se ve bien en mobile */}
            <strong>Homepage</strong>
          </a>
        </p>
        <p>
          <a href={imdbUrl} target="_blank" rel="noreferrer">
            {/* {imdbUrl} */}
            <strong>IMDB</strong>
          </a>
        </p>
      </div>
    </div>
  );
}
