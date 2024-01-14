import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Error from "components/Error/Error";
import Container from "components/Container/Container";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import Review from "components/Review/Review";
import Modal from "components/Modal/Modal";
import css from "./Reviews.module.css"

import { getReviews } from "api/reviews";

const Reviews = () => {
    const { movieId } = useParams();

    const [showReviews, setShowReviews] = useState([]);
    const [currentPage, setcurrentPage] = useState(0);
    const [load, setLoad] = useState(false);
    const [end, setEnd] = useState(false);
    const [error, setError] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const perPage = 5;

    const loadMore = () => {
      setcurrentPage((prev) => prev + 1);
      setLoad(true);
    }

    const showModal = (data) => {
      setIsModal(true);
      setModalData(data);
    }

    const closeModal = () => {
      setIsModal(false);
      setModalData(null);
    }

     useEffect(() => {
      setLoad(false)
      const start = perPage * (currentPage);
      const end = start + perPage;
      const getData = async () => {
      try {
        Loading.circle()
        setError("");
        const { results } = await getReviews(movieId);
        if (results.length === 0) {
          setIsEmpty(true)
          return;
        } 
        if (!showReviews.length) {
          setShowReviews(results.slice(start, end))
        }
        if (load) {
          setShowReviews((prev)=> [...prev,...results.slice(start, end)])
        }
        if (showReviews.length >= results.length) {
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
     }, [movieId, showReviews, currentPage, load])
  return (
      <>
        {isEmpty && <Error>There is no reviews</Error>}
        {error && <Error>{error}</Error>}
        {!isEmpty && <div>
          <Container>
            <ul className={css.list}>
              {showReviews.map((item) => <Review key={item.id} data={item} showModal={showModal} />)}
            </ul>
            {showReviews.length >= perPage && !end && <LoadMoreBtn fn={loadMore} />}
          </Container>
        </div>}
        {isModal && <Modal closeModal={closeModal} data={modalData} />}
    </>
  )
}

export default Reviews