import React from "react";
import { format, parseISO } from "date-fns";

const NewCard = ({
  url,
  urlToImage,
  title,
  description,
  publishedAt,
  source,
}) => {
  return (
    <div>
      <div>
        {/* <a href={urlToImage} target="_blank" rel="noreferrer"> */}
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} alt={urlToImage} />
        </a>

        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        <p>{description}</p>

        {/* https://www.reactshark.com/blog/guide-react-date-format */}
        {/* https://github.com/date-fns/date-fns/blob/main/docs/upgradeGuide.md#string-arguments */}
        {/* https://date-fns.org/v2.29.1/docs/format      */}
        <p>
          <b>Publicado el </b>
          {/* Day of month » dd	» 01, 02, ..., 31
          Month (formatting) » MM	» 01, 02, ..., 12
          Calendar year » yyyy	» 0044, 0001, 1900, 2017 */}
          {format(parseISO(publishedAt), "dd/MM/yyyy")}
          <br />
          <b> a las </b>
          {/* Hour [0-23] » HH	» 00, 01, 02, ..., 23
          Minute » mm	» 00, 01, ..., 59 */}
          {format(parseISO(publishedAt), "HH:mm")} hs.
          <br />
          <b>by </b>
          {source}
        </p>
      </div>
    </div>
  );
};

export default NewCard;
