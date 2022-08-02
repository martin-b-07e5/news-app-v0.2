import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// rf snippet
export function Search() {
  const [query, setQuery] = useSearchParams(); // setQuery me permite setear lo que paso por la url.
  const search = query.get("search"); // hook que captura lo que ingresamos en la busqueda.

  const [isValid, setIsValid] = useState(false); // hook ocultar btn.
  useEffect(() => {
    if (search != null) {
      if (search.length >= 3) {
        setIsValid(true); // cdo search > 3, p/habilitar btn.
      } else setIsValid(false);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault(); // dont't refressh the form when submit.
    console.log("👇 enter pressed");
    console.log(search);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery({ search: value });
  };

  return (
    <form
      className={styles.searchContainer}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Input 3 or more characters"
          autoFocus={true}
          value={search ?? ""} // Si search es null o undefined, agarre "" por defecto.
          onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          disabled={!isValid}
        >
          <FaSearch size={20} />
        </button>
        {/* {console.log(isValid)} */}
      </div>
    </form>
  );
}
