import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import "./style.css"
const mainTemplate = `<div class="container">
                        <div class="search-container" id="search-container"></div>
                        <div class="results-container" id="results-container"></div>
                    </div>`;


function renderMain(element,props={}){
    let app = document.getElementById(element);
    app.innerHTML = mainTemplate;

}

function init(){
    renderMain("app");
    SearchBar("search-container");
    SearchResults("results-container")
}

init();

