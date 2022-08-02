import styles from "./NewsGrid.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Empty } from "./Empty";
import { Spinner } from "./Spinner";
import NewCard from "./NewCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GetDataAPI from "../services/GetDataAPI";

// rf snippet
/* componente para hacer la grilla.
https://developers.themoviedb.org/3/getting-started/authentication
💡💡💡💡💡destructuramos al ponerle el parametro {search},
 que es el argumento que viene desde LandingPage */
export function NewsGrid({ search }) {
  // us snippet
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1); // trabajando s/esto
  const [hasMore, setHasMore] = useState(true); // p/infinite scroll

  useEffect(() => {
    if (search && search.length > 0) {
      setIsLoading(true); // para el spinner
    }
    if (search && search.length >= 3) {
      const getArticles = async () => {
        const response = await axios.get(
          // `https://newsapi.org/v2/everything?q=${search}&apiKey=af04d9e1481a41818db19c18914598ad&page=1&pageSize=10&language=es`,
          `https://newsapi.org/v2/everything?`,
          {
            params: {
              q: search,
              // page: 1,
              page: page,
              pageSize: 10,
              language: "es",
              // apiKey: "af04d9e1481a41818db19c18914598ad",  //acidb1
              apiKey: "d2b71d9bb99a4725b1c3ba0d40163a73", // ommaba
              // apiKey: "88589059d5eb4758aba90c7bdaab4932", // onlinetangoshop
            },
          }
        );
        setTotalResults(response.data.totalResults);
        // setArticles(response.data.articles);
        setArticles((prevPage) => prevPage.concat(response.data.articles)); // con esto funciona InfiniteScroll
        // setHasMore(response.data.page < response.data.totalResults / 10); // no esta funcionando con esto
        setIsLoading(false); // cdo se terminó de cargar articles(para el spinner)
      };
      getArticles();
      // ------------------------------------------------------------
      // ver REEMPLAZAR const getArticles, POR ESTO
      // // operador ternario (hacer uno u otro)
      // // `https://newsapi.org/v2/everything?
      // // q=${search}&apiKey=af04d9e1481a41818db19c18914598ad&page=1&pageSize=10&language=es`,

      // const searchUrl = search
      //   ? search + "&page=" + page // Buscamos las que coincidan con la condición de busqueda
      //   : "/discover/everything?page=" + page;
      // // si hay un cambio » ejecutamos una busqueda
      // // 💡💡💡💡💡 searchUrl es el "argumento" a que le pasamos
      // //  a la función GetDataAPI que tiene el "parametro" path. (ver httpClient.js)
      // GetDataAPI(searchUrl).then((data) => {
      //   // setArticles(data.results);  // 👇p/que no sobreescriba
      //   // setArticles((prevNews) => prevNews.concat(response.data.results));
      //   setArticles((prevNews) => prevNews.concat(data.results));
      //   // setHasMore(response.data.page < data.total_pages);
      //   setHasMore(data.page < data.total_pages);
      //   setIsLoading(false); // cdo se terminó de cargar news(p/ spinner)
      // });
      // ------------------------------------------------------------
    }
  }, [search, page]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && articles.length === 0) {
    return <Empty />;
  }

  // console.log("articles.length: " + articles.length);
  // console.log("articles: " + articles);
  console.log("hasMore: " + hasMore);
  return (
    <InfiniteScroll
      dataLength={articles.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)} // le pasamos una función
      loader={<Spinner />}
    >
      {/* <ul className={styles.newsGrid}>
        {articles.map((item) => (
          <NewCard key={item.id} item={item} />
        ))}
      </ul> */}
      <div id="gral">
        <div id="totalNews">
          <p className={styles.totalNews}>
            Está viendo {articles.length} noticias de {totalResults} resultados.
          </p>
        </div>
        <div id="newsGrid" className={styles.newsGrid}>
          {articles.map((article, index) => {
            return (
              <NewCard
                article={article}
                key={index}
                totalResults={totalResults}
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
                source={article.source.name}
                articleLength={articles.length}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}
