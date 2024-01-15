import { useCallback, useEffect, useState } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useSearchParams } from "react-router-dom";

import Error from "components/reuse/Error/Error";
import Searchbar from "components/Searchbar/Searchbar";
import ProductList from "components/ProductList/ProductList";
import Container from "components/reuse/Container/Container";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import Section from "components/reuse/Section/Section";

import getSearchMovies from "api/searchMovies"

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isEnd, setIsEnd] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams] = useSearchParams();

  const handleOnSearch = () => {
    setMovies([]);
  }

  const getData = useCallback( async (qwery) => {
    if (!qwery) return;
        try {
          Loading.circle()
          setError("");
          const response = await getSearchMovies(qwery,page);
          if (page === 1) {
             setMovies([...response.results]);
          }
          if (page > 1) {
            setMovies(prev => [...prev, ...response.results]);
          }
          if (page >= response.total_pages) {
            setIsEnd(true)
          }
          if (!response.total_results) {
            setIsEmpty(true)
          }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }finally {
      Loading.remove(300);
    }
  }, [page])

  useEffect(() => {
    const qwery = searchParams.get('query');
    getData(qwery)
    }, [getData, searchParams])
  
  const loadMore = () => {
    setPage((prev => prev + 1))
  }

  return (
    <>
      {error && <Error>{error}</Error>}
      <Section>
        <Container>
          <Searchbar submit={handleOnSearch} />
          {isEmpty && <Error>There is no results</Error>}
          {movies.length !== 0 && <ProductList data={movies} />}
          {movies.length !== 0 && !isEnd && <LoadMoreBtn fn={loadMore} />}
        </Container>
    </Section>
    </>
  )
}

export default Movies