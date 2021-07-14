const searchBarTemplate = `<div class="search-bar">
                            <input type="text" id="movie-input" placeholder="Search for movies...."/>
                            <button id="search-button">Search</button>
                            </div>`;

export default function SearchBar(domNode, props={}){
    let element = document.getElementById(`${domNode}`);
    element.innerHTML = searchBarTemplate;
}

