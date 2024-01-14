import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    language: 'en-US',
});

instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U2NGFiODE5MGJkZDBjOTkyMTExZjMwMGQ0Nzg3NCIsInN1YiI6IjY1OWFkODZlYzk5NWVlMDBlY2ZhYzUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WZQy9rIvmjUGJiILYo0wHyKd1OFTLmjvuUWyJnQJ-C4';

export default instance;