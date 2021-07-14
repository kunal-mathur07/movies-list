import { apiUrls } from "./constants";

export async function getMovies(params) {
  let movies = [];
  try {
    let resp = await fetch(`${apiUrls.getMovies}${params}`);
    let searchResults = await resp.json();
    if (searchResults.Error) {
      return (movies = "error");
    }
    movies = searchResults.Search;
    return movies;
  } catch (ex) {
    return (movies = "error");
  }
}

export async function getMovieDetails(params) {
  let movieDetails;
  try {
    let resp = await fetch(`${apiUrls.getMovieDetails}${params}`);
    let details = await resp.json();
    movieDetails = details;
    return movieDetails;
  } catch (ex) {
    return (movieDetails = "error");
  }
}
