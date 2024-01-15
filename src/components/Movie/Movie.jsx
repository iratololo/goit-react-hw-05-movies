import {NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"

import Container from "components/reuse/Container/Container";
import css from "./Movie.module.css"
import GoBackBtn from "components/GoBackBtn/GoBackBtn";
import Title from "components/reuse/Title/Title";

const Movie = ({ data: { title, poster_path, vote_average, overview, genres, release_date, runtime, backdrop_path } }) => {
    
    const {state} = useLocation();
    const backLink = state ?? '/';

    const navigate = useNavigate();
    
    const handlerGoBack = () => {
    navigate(backLink)
  }


    let date = new Date(release_date);
    const hour = Number.parseInt(runtime / 60);
    const minute = Number.parseInt(runtime - (hour * 60));
    return (
        <>
        <Container><GoBackBtn handlerGoBack={handlerGoBack} /></Container>
        <div className={css.wrap}>
        <div className={css.card}>
            <Container>
                <div className={css.content}>
                    <div>
                        {poster_path && <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={css.img}/>}
                    </div>
                    <div>
                        <Title className={css.name} level={3} title={title}/>
                        <div className={css.info}>
                            {release_date && <div className={css.item}>{date.getFullYear()}</div>}
                            {genres.length !== 0 && <div className={css.item}><p className={css.genres}>{genres.map(item => <span key={item.id} className={css.genre}>{item.name}</span>)}</p></div>}
                            {runtime && <div className={css.item}><p><span>{hour!==0 && `${hour} h`}</span> <span>{minute && `${minute} min`}</span></p></div>}
                        </div>
                        <p className={css.score}>{vote_average.toFixed(1)}</p>
                        <p className={css.subtitle}>Overview</p>
                        <p className={css.text}>{overview}</p>
                        <nav>
                            <ul className={css.nav}>
                                <li className={css.link}>
                                    <NavLink to="credits" state={state}>Cast</NavLink>
                                </li>
                                <li className={css.link}>
                                    <NavLink to="reviews" state={state}>Reviews</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </div>
        {backdrop_path && <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title} className={css.bg}/>}
    </div>
    <Container>
        <Outlet/>
    </Container>
    </>
  )
}

export default Movie