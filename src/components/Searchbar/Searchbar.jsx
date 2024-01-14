import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import css from "./Searchbar.module.css"

const Searchbar = ({submit}) => {

    const[searchParams, setSearchParams ]=useSearchParams();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        submit();
        const keyWord = e.target.elements.search.value;
        setSearchParams({ query: keyWord });
    }
    
    useEffect(() => {
        const input = document.querySelector("input");
        input.value = searchParams.get('query');
    }, [searchParams])


  return (
      <div className={css.searchbar}>
              <div className={css.descriptions}>
                  <p className={css.title}>Welcome</p>
                  <p className={css.subtitle}>Millions of movies, TV shows and personalities. Explore now.</p>
              </div>
              <form onSubmit={handleOnSubmit} className={css.form}>
                <input
                    className={css.input}
                    name='search'
                    type="text"
                    autoFocus
                    placeholder="Search movies"
                />
                  
                <button type="submit" className={css.button}>
                    <span>Search</span>
                </button>
                </form>
        </div>
        )
}

export default Searchbar;