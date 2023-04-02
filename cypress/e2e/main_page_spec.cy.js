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

  it('should have error handling on bad server request', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500,
    })
    .visit('http://localhost:3000/');
    cy.contains('h2', 'Error: There has been an issue with the server, please refresh the page -');
  });

  it('should display default image when no poster is present', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "test-data-no-posters"
    })
    .visit('http://localhost:3000/');
    cy.get("[data-cy='poster-image']").first().should('have.attr', 'src').should('include','/static/media/no-poster.9eda85993686d2cfea2a.png');
    cy.get("[data-cy='poster-image']").last().should('have.attr', 'src').should('include','/static/media/no-poster.9eda85993686d2cfea2a.png');
  });
});