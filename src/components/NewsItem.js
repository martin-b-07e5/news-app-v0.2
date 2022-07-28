import React from "react";
import styles from "./NewsItem.css";
import { format, parseISO } from "date-fns";

const NewsItem = ({
  //   articleLength,
  //   totalResults,
  url,
  title,
  description,
  publishedAt,
  urlToImage,
}) => {
  return (
    <div className="news-app-content">
      {/* <p>Está viendo {articleLength} noticias de {totalResults} resultados.</p> */}
      <div className="news-img">
        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        {/* https://www.reactshark.com/blog/guide-react-date-format */}
        {/* https://github.com/date-fns/date-fns/blob/main/docs/upgradeGuide.md#string-arguments */}
        <p>
          Publicado el: {format(parseISO(publishedAt), "dd/mm/yyyy")} a las{" "}
          {format(parseISO(publishedAt), "hh:mm")} hs.
        </p>
        <a href={urlToImage} target="_blank" rel="noreferrer">
          <img style={styles.image} src={urlToImage} alt={urlToImage} />
        </a>

        <br />
      </div>
    </div>
  );
};

export default NewsItem;
