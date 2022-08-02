// const API_KEY = "af04d9e1481a41818db19c18914598ad";
const API_KEY = "d2b71d9bb99a4725b1c3ba0d40163a73";
// const API_KEY = "88589059d5eb4758aba90c7bdaab4932";

export default async function GetDataAPI(search, page) {
  const URL = `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=10&language=es&apiKey=${API_KEY}`;
  const data = await fetch(URL);

  return data.json();
}
