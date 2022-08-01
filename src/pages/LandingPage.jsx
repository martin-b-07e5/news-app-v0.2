import { useSearchParams } from "react-router-dom";
import { Search } from "../components/Search";
import { NewsGrid } from "../components/NewsGrid";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const [query] = useSearchParams(); // capturamos lo que pusimos en el search, de la url(search input en este caso)
  const search = query.get("search"); // este search lo que hace es, cdo cbia la busqueda » se crea de nuevo el componente.
  const debouncedSearch = useDebounce(search, 500); // autosearch

  return (
    <div>
      <Search />
      {/* Si cambio la key de un componente »
        » react automaticamente destruye el componente y lo vuelve a crear.
        Nos sirve para resetear en NewsGrid los estados de: movies, isLoading,
          page y hasMore.
        Sino, podemos mover todos los estados al componente padre(LandingPage)
          y pasarle todo, por props a los hijos.
      💡Ahora funciona nuevamente la busqueda desde el input (Después de
          agregar el infinite scroll, funcionaba solo desde la url)
      */}

      <NewsGrid key={debouncedSearch} search={debouncedSearch} />
      {/* 👆A NewsGrid, Le pasamos search por props.
      A la función NewsGrid le pasamos clave, valor. 
      La clave valor llega al componente en forma de objeto.
        » destructuramos el objeto en NewsGrid.
      */}
    </div>
  );
}
