import { getMovies } from "./api";
import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import "./style.css";
const mainTemplate = `<div class="container">
                        <div class="search-container" id="search-container"></div>
                        <div class="results-container" id="results-container"></div>
                    </div>`;

function renderMain(element, props = {}) {
  let app = document.getElementById(element);
  app.innerHTML = mainTemplate;
}

async function getMoviesResult(movieName) {
  let movies = await getMovies(movieName);
  SearchResults("results-container", { movies });
}

function init() {
  renderMain("app");
  SearchBar("search-container", { getMoviesResult });
  SearchResults("results-container", {});
}

init();
