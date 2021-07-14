const IMDB = "Internet Movie Database";
export function MovieDetails(domNode, props = {}) {
  const { movieDetails } = props;
  function getRatings(movieDetails) {
    return movieDetails.Ratings.map((rating) => {
      rating.Source = rating.Source === IMDB ? "IMDB" : rating.Source;
      return ` ${rating.Source} ${rating.Value} `;
    });
  }

  let element = document.getElementById(`${domNode}`);
  element.innerHTML = `<div class="view-movie-details">
                            <div><strong>Year:</strong> ${
                              movieDetails.Year
                            }</div>
                            <div> <strong> Rated:</strong> ${
                              movieDetails.Rated
                            } </div>
                            <div> <strong> Rating:</strong>${getRatings(
                              movieDetails
                            )}</div>
                            <div> <strong>Actors:</strong> ${
                              movieDetails.Actors
                            }</div>

                            <div> <strong>Plot:</strong> ${
                              movieDetails.Plot
                            }</div>
                        </div>`;
}
