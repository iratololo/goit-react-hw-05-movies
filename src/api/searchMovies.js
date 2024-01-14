import instance from "./api";

const getSearchMovies = async(qwery,page) => {
    const { data } = await instance('/search/movie', {
    params: {
        query: qwery,
        page: page,
  },});
    return data;
}

export default getSearchMovies
