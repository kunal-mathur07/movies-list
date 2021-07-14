const searchBarTemplate = `<form class="search-bar" id="search-bar">
                                <input type="text" id="movie-input" placeholder="movie name e.g Rambo "/>
                                <button id="search-button">Search</button>
                            </form>`;

export default function SearchBar(domNode, props = {}) {
  let element = document.getElementById(`${domNode}`);
  element.innerHTML = searchBarTemplate;

  document.getElementById("search-bar").addEventListener("submit", (e) => {
    e.preventDefault();
    let searchItem = document.getElementById("movie-input").value;
    props.getMoviesResult(searchItem);
  });
}
