describe('Text Input Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/text-input-demo-nav-link');
  });

  it('Verify text input', () => {
    cy.get('#text').type('Hello world');
    cy.get('#text').should('have.value', 'Hello world');
  });

  it('Verify disabled text input', () => {
    cy.get('#text-disabled').should('be.disabled');
  });

  it('Verify read-only input', () => {
    cy.get('#text-read-only').should('have.attr', 'readonly');
  });

  it('Verify left-truncated input', () => {
    cy.get('#text-truncated-on-left').should('exist');
  });

  it('Verify Text input can be validated using validated prop', () => {
    cy.get('.pf-m-success > #text-validated').should('not.exist');
    cy.get('#text-validated').then((textinput) => {
      expect(textinput.attr('aria-invalid')).to.be.equal('false');
    });
    cy.get('#text-validated').should('have.value', '');
    // Type string value less than 5 characters so it is invalid
    cy.get('#text-validated').type('test');
    cy.get('#text-validated').should('have.value', 'test');
    cy.get('#text-validated').then((textarea) => {
      expect(textarea.attr('aria-invalid')).to.be.equal('true');
    });
    // Clear text input and type string longer than 5 Characters so it is valid
    cy.get('#text-validated').clear().type('testing').should('have.value', 'testing');
    cy.get('.pf-m-success > #text-validated').should('exist');
    cy.get('#text-validated').then((textinput) => {
      expect(textinput.attr('aria-invalid')).to.be.equal('false');
    });
    // Clear text input and verify it is warning
    cy.get('#text-validated')
      .clear()
      .then((textarea) => {
        expect(textarea.attr('aria-invalid')).to.be.equal('false');
      });
    cy.get('.pf-m-warning > #text-validated').should('exist');
  });
});
