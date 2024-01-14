import instance from "./api";

export const getDetails = async(id) => {
    const { data } = await instance(`/movie/${id}`);
    return data;
}
