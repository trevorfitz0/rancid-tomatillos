describe('Form', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "test-data-movies"
    })
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: "test-data-modal-movie"
    })
    .visit('http://localhost:3000/');
  });

  it('should be able to search for a movie', () => {
    cy.get('form').click().type('black');
    cy.get('.movie-container').children().first().children().first().children().first().should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg');
  });

  it('should be able to search for and then open a movie', () => {
    cy.get('form').click().type('black');
    cy.get('.movie-container').children().first().click();
    cy.get('.title-rating').contains('h2', 'Black Adam');
  });

  it('should have error handling if the search has no matches', () => {
    cy.get('form').click().type('SCREEEE');
    cy.get('.movie-container').should('contain', 'Nothing matches that search! Please try something else.');
  });

});