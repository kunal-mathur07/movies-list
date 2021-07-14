export default function Card(domNode, props = {}) {
  const { movies } = props;
  let element = document.getElementById(domNode);

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
  movies.forEach((movie) => {
    movie.Poster =
      movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noImage;

    element.appendChild(createCard(movie));
  });
}
