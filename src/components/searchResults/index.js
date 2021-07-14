import Cards from "./Cards";
import { getMovieDetails } from "../../api";

export default function SearchResults(domNode, props = {}) {
  async function getDetails(movie) {
    const movieDetails = await getMovieDetails(movie);
    return movieDetails;
  }
  props.getDetails = getDetails;
  return Cards(domNode, props);
}
