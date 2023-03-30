function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`There has been an issue with the server, please refresh the page - ${response.status}`);
    });
}

function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`There has been an issue with the server, please refresh the page - ${response.status}`);
    });
}

export { getAllMovies, getSingleMovie };