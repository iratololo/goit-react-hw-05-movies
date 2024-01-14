import instance from "./api";

export const getReviews = async(id) => {
    const { data } = await instance(`/movie/${id}/reviews`);
    return data;
}