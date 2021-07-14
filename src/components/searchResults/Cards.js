import { MovieDetails } from "./movieDetails";
import noImage from "../../../assets/no-image.svg";
export default function Card(domNode, props = {}) {
  const { movies, getDetails } = props;
  let element = document.getElementById(domNode);
  element.innerHTML = "";

  // Loop over the resultset to create movie cards and add the show and hide detail links.
  movies.forEach((movie) => {
    movie.Poster =
      movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noImage;

    element.appendChild(createCard(movie));
    const details = document.getElementById(`movie-details-${movie.imdbID}`);
    details.appendChild(showDetailsLink(movie));
    details.appendChild(hideDetailsLink(movie));
  });

  function createCard(movie) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
                <div class="movie-img">
                <img src="${movie.Poster}"/>
                </div>
                <div class="movie-details" id="movie-details-${movie.imdbID}">
                    <div class="title"> 
                    ${movie.Title}
                    
                    </div>
                       
                </div>
                 <div class="details-container" id="details-container-${movie.imdbID}">
                    </div>`;
    return card;
  }

  function showDetailsLink(movie) {
    const showDetails = document.createElement("div");
    showDetails.innerText = "View Details";
    showDetails.setAttribute("id", `show-details-${movie.imdbID}`);
    showDetails.setAttribute("class", "showDetails");
    showDetails.addEventListener("click", async () => {
      const detailsContainer = document.getElementById(
        `details-container-${movie.imdbID}`
      );
      const hideDetails = document.getElementById(
        `hide-details-${movie.imdbID}`
      );
      const movieDetails = await getDetails(movie.Title);

      detailsContainer.style.display = "block";
      MovieDetails(detailsContainer.id, { movieDetails });
      hideDetails.style.display = "block";
      showDetails.style.display = "none";
    });
    return showDetails;
  }

  function hideDetailsLink(movie) {
    const hideDetails = document.createElement("div");
    hideDetails.innerText = "Hide Details";
    hideDetails.setAttribute("id", `hide-details-${movie.imdbID}`);
    hideDetails.setAttribute("class", "showDetails");
    hideDetails.style.display = "none";
    hideDetails.addEventListener("click", () => {
      const detailsContainer = document.getElementById(
        `details-container-${movie.imdbID}`
      );
      const showDetails = document.getElementById(
        `show-details-${movie.imdbID}`
      );
      detailsContainer.style.display = "none";
      showDetails.style.display = "block";
      hideDetails.style.display = "none";
    });
    return hideDetails;
  }
}
