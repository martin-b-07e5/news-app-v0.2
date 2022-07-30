import styles from "./Search.module.css";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

// rf snippet
export function Search() {
  const [query, setQuery] = useSearchParams(); // setQuery me permite setear lo que paso por la url
  const search = query.get("search"); // hook que captura lo que ingresamos en la busqueda

  const [isValid, setIsValid] = useState(true); // hook ocultar btn
  useEffect(() => {
    if (search != null) {
      if (search.length >= 3) {
        setIsValid(false); // cdo search > x, p/ocultar btn
      }
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault(); // dont't refressh the form when submit
    console.log("👇 enter pressed");
    console.log(search);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Input 3 or more characters"
          aria-label="Search News"
          autoFocus={true}
          value={search ?? ""} // Si search es null o undefined, agarre "" por defecto
          // onChange={(e) => setQuery(e.target.value)} // ver si esto funciona
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
          }}
        />
        <FaSearch
          size={20}
          className={styles.searchButton}
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
