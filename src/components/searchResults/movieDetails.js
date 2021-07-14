export function MovieDetails(domNode, props = {}) {
  const { movieDetails } = props;
  let element = document.getElementById(`${domNode}`);
  element.innerHTML = `<div class="view-movie-details">
                            <div><strong>Year:</strong> ${movieDetails.Year}</div>
                            <div> <strong>Actors:</strong> ${movieDetails.Actors}</div>
                            <div> <strong>Plot:</strong> ${movieDetails.Plot}</div>
                        </div>`;
}
