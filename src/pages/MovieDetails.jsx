import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Error from "components/reuse/Error/Error";
import Movie from "components/Movie/Movie";
import Section from "components/reuse/Section/Section";

import { getDetails } from "api/movie";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieIDetail, setMovieIDetail] = useState(null);
  const [error, setError] = useState("");

     useEffect(() => {
        const getData = async () => {
        try {
            Loading.circle()
            setError("");
            const response = await getDetails(movieId);
            setMovieIDetail(response);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }finally {
      Loading.remove(300);
    }
}

getData()}, [movieId])
 
  return (
    <Section>
      {error && <Error>{error}</Error>}
      {movieIDetail && <Movie data={movieIDetail} />}
    </Section>
  )
}

export default MovieDetails