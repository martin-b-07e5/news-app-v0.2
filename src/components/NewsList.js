import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "./NewsList.css";

// rf snippet
export function NewsList() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=af04d9e1481a41818db19c18914598ad&page=1&pageSize=10&language=es`
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);

      //   console.log("👀 response");
      //   console.log(response);
      //   console.log("💡 response.data.totalResults");
      //   console.log(response.data.totalResults);
      //   console.log("💡 response.data.articles.length");
      //   console.log(response.data.articles.length);
    };
    getArticles();
  }, []);

  //   console.log("👇 articles");
  //   console.log(articles);
  //   console.log("👇 articles.length");
  //   console.log(articles.length);
  //   console.log("👀 articles.urlToImage");
  //   console.log(articles.urlToImage);

  return (
    <div className="article-container">
      <p className="total-news">
        Está viendo {articles.length} noticias de {totalResults} resultados.
      </p>
      {articles.map((article, index) => {
        return (
          <NewsItem
            article={article}
            articleLength={articles.length}
            description={article.description}
            key={index}
            publishedAt={article.publishedAt}
            title={article.title}
            totalResults={totalResults}
            url={article.url}
            urlToImage={article.urlToImage}
            source={article.source.name}
          />
        );
      })}
    </div>
  );
}
