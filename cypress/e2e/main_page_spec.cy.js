describe('Main page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "test-data-movies"
    })
    .visit('http://localhost:3000/');
  });

  it('should load the page and display a title', () => {
    cy.get('header').contains('h1', 'RANCID TOMATILLOS');
  });

  it('should display an array of movie tiles', () => {
    cy.get("[data-cy='poster-image']").first().should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg');

    cy.get("[data-cy='poster-image']").last().should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg');
  });

});