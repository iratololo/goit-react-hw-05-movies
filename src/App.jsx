import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "layout/Layout";
import Home from "pages/Home";
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={Loading.circle()}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>
    </Suspense>
  );
};
