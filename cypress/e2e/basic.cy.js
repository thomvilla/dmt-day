describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the main', () => {
    cy.get('main');
  });
});
