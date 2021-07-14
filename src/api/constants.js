const API_KEY ="ff79cce7";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


export const apiUrls={
    getMovies:`${BASE_URL}&s=`,
    getMovieDetails:`${BASE_URL}&plot=full&t=`,
}