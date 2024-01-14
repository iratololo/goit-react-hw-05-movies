import instance from "./api";

export const getCredits = async(id) => {
    const { data } = await instance(`/movie/${id}/credits`);
    return data;
}