import Cards from "./Cards";
import { getMovieDetails } from "../../api";

const noDataTemplate = `<div class="message-text">
                            Sorry we couldn't find any such movie.
                        </div>`;

const zeroStateTemplate = `<div class="message-text">
                            Search your favorite movies by movie name e.g Rambo
                        </div>`;

export default function SearchResults(domNode, props = {}) {
  const { movies } = props;
  const element = document.getElementById(`${domNode}`);
  if (!movies) {
    element.innerHTML = zeroStateTemplate;
    return;
  }

  if (movies && (movies === "error" || movies.length === 0)) {
    element.innerHTML = noDataTemplate;
    return;
  }
  async function getDetails(movie) {
    const movieDetails = await getMovieDetails(movie);
    return movieDetails;
  }
  props.getDetails = getDetails;
  return Cards(domNode, props);
}
