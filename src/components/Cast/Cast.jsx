import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Error from "components/Error/Error";
import Container from "components/Container/Container";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import Plug from "components/Plug/Plug";
import css from "./Cast.module.css"

import { getCredits } from "api/credits";

const Cast = () => {
    const { movieId } = useParams();
    
    const [showCredits, setShowCredits] = useState([]);
    const [currentPage, setcurrentPage] = useState(0);
    const [load, setLoad] = useState(false);
    const [end, setEnd] = useState(false);
    const [error, setError] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    const perPage = 12;

    const loadMore = () => {
        setcurrentPage((prev) => prev + 1);
        setLoad(true);
    }

    useEffect(() => {
        setLoad(false)
        const start = perPage * (currentPage);
        const end = start + perPage;
        const getData = async () => {
        try {
            Loading.circle()
            setError("");
            const { cast } = await getCredits(movieId);
            if (cast.length === 0) {
                setIsEmpty(true)
                return;
            } 
            if (!showCredits.length) {
                setShowCredits(cast.slice(start, end))
            }
            if (load) {
                setShowCredits((prev)=> [...prev,...cast.slice(start, end)])
            }
            if (showCredits.length >= cast.length) {
                setEnd(true)
            }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }finally {
      Loading.remove(150);
    }
}

getData()
     }, [movieId,showCredits,currentPage,load])

    return (
      <>
        {isEmpty && <Error>There is no results</Error>}
        {error && <Error>{error}</Error>}
        {!isEmpty && <div className={css.credits}>
          <Container>
             <h4 className={css.title}>Starring</h4>
              <ul className={css.list}>
                {showCredits.map(({id,profile_path,name,character}) => {
                  return (
                    <li key={id} className={css.item}>
                      <div className={css.poster}>
                        {profile_path && <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={css.img} />}
                        {!profile_path && <Plug title={name} />}
                      </div>
                        <p className={css.name}>{name}</p>
                        <p className={css.character}>{character}</p>
                    </li> 
                  )
                })}
              </ul>
              {showCredits.length >= perPage && !end && <LoadMoreBtn fn={loadMore} />}
        </Container>
            </div>}
      </>
  )
}

export default Cast