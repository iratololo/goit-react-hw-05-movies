import instance from "./api";

export const getAllTrending = async() => {
    const { data } = await instance('/trending/movie/day');
    return data;
}
