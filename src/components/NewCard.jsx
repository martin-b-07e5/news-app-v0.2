import React from "react";
import styles from "./NewCard.module.css";
import { format, parseISO } from "date-fns";

const NewCard = ({
  url,
  title,
  description,
  publishedAt,
  source,
  urlToImage,
}) => {
  return (
    <div>
      <div>
        {/* <a href={urlToImage} target="_blank" rel="noreferrer"> */}
        <a href={url} target="_blank" rel="noreferrer">
          <img style={styles.image} src={urlToImage} alt={urlToImage} />
        </a>

        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        <p>{description}</p>

        {/* https://www.reactshark.com/blog/guide-react-date-format */}
        {/* https://github.com/date-fns/date-fns/blob/main/docs/upgradeGuide.md#string-arguments */}
        <p>
          <b>Publicado el </b>
          {format(parseISO(publishedAt), "dd/mm/yyyy")}
          <br />
          <b> a las </b>
          {format(parseISO(publishedAt), "hh:mm")} hs.
          <br />
          <b>by </b>
          {source}
        </p>
      </div>
    </div>
  );
};

export default NewCard;
