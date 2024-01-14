import { Link, useLocation } from "react-router-dom"

import Plug from "components/Plug/Plug";
import css from "./ProductCard.module.css"

const ProductCard = ({ data: { id, poster_path, title, release_date, vote_average } }) => {
    const location = useLocation();
    let date = new Date(release_date);
  return (
      <li className={css.card}>
          <Link to={`/movies/${id}`} state={location}>
              <div className={css.poster}>
                  {poster_path && <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={css.img} />}
                  {!poster_path && <Plug title={title} />}
              </div>
              {date && <p className={css.text}>{date.getFullYear()}</p>}
              <h3 className={css.title}>{title}</h3>
              {vote_average && <div className={css.rating}>{vote_average.toFixed(1)}</div>}
          </Link>
    </li>
  )
}

export default ProductCard