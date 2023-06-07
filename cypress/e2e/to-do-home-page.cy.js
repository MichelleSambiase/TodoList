Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload
describe("To-Do List Home Page", () => {
  beforeEach(() => {
    cy.session('Todoitems localStorage', () => {
      // cy.visit('/').then(() => {
      // localStorage.setItem('TodoItems', JSON.stringify('items'))
      // })
    })
    cy.visit('/')
  })

  it('Should render the home page', () => {
    cy.get('[data-cy="title"]').should('contain', 'TO DO LIST')
  });
  it('Should render buttons', () => {
    cy.get('[data-cy="buttons"]').should('be.visible')
  });
  it('Should activate To-Do List and add item to listBox', () => {
    cy.get('[data-cy="activateButton"]').should('be.visible').click()
    cy.get('.MuiInputBase-input').click()
    cy.get('.MuiInputBase-input').type('Agua')
    cy.get('[data-cy="addButton"]').click()
    cy.get('[data-cy="listBox"]').should('contain', 'Agua').then((items) => {
      expect(items[0]).to.contain.text('Agua')
    })

    cy.get('.MuiInputBase-input').click()
    cy.get('.MuiInputBase-input').clear()
    cy.get('.MuiInputBase-input').type('Comprar pan lactal')
    cy.get('[data-cy="addButton"]').click()

    cy.get('.MuiInputBase-input').click()
    cy.get('.MuiInputBase-input').clear()
    cy.get('.MuiInputBase-input').type('Comprar Leche')
    cy.get('[data-cy="addButton"]').click()
  });

  it('Items should be in localStorage', () => {
    const todoItems = localStorage.getItem('TodoItems')
    expect(todoItems).to.exist

    // cy.window().then((window) => {
    //   expect(window.localStorage.getItem('TodoItems')).to.eq('TodoItems')
    // })
  });
});
