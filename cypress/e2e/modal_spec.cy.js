/* eslint-disable no-undef */
describe('Modal', () => {
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

  it('should not exist prior to being clicked', () => {
    cy.get("[data-cy='modal-section']").should('not.exist');
  });

  it('should exist when a movie tile is clicked', () => {
    cy.get("[data-cy='poster-image']").first().click();
    cy.get("[data-cy='modal-section']").should('exist');
  });

  it('should have a rating, title, and background image', () => {
    cy.get("[data-cy='poster-image']").first().click();
    cy.get("[data-cy='backdrop_path']").should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg');
    cy.get("[data-cy='modal-section']").contains("h2", "Black Adam");
    cy.get("[data-cy='stars']").should("exist");
  });

  it('should not exist when exit button is clicked', () => {
    cy.get("[data-cy='poster-image']").first().click();
    cy.get("[data-cy='close-button']").first().click();
    cy.get("[data-cy='modal-section']").should('not.exist');
  });

  it('should display default image when no backdrop is present', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: "test-data-modal-no-backdrop"
    })

    cy.get("[data-cy='poster-image']").first().click();

    cy.get("[data-cy='backdrop_path']").should('have.attr', 'src').should('include','/static/media/theater.d94eb828544a26a82c58.jpg');

  })
  
  it('should display alert when modal is activated with no data', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 500,
    })

    cy.get("[data-cy='poster-image']").first().click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please try again. Code:');
    });

  })

});