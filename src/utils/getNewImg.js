import placeholder from "../placeholder.png";

export function getNewImg(path, width) {
  // https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg

  //   return path ? "https://image.tmdb.org/t/p/w300" + path : placeholder;
  //   return path ? "https://image.tmdb.org/t/p/w" + width + path : placeholder;
  // 💡above code, converted to template string
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
