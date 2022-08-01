const API_KEY = "af04d9e1481a41818db19c18914598ad";

export default async function getDataAPI(search, page) {
  const URL = `https://newsapi.org/v2/everything?
  q=${search}&
  apiKey=${API_KEY}&
  page=${page}&
  pageSize=10&
  language=es`;
  const data = await fetch(URL);

  return data.json();
}
