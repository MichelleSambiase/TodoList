Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload

const todoItems = [
  'Agua',
  'Pan',
  'Aceite',
  'Huevo',
  'Azúcar'
]

describe("To-Do List Home Page", () => {
  beforeEach(() => {
    cy.session('session todo', () => {
      cy.visit('/').then(() => {
        cy.get('[data-cy="title"]').should('contain', 'TO DO LIST')
        cy.get('[data-cy="buttons"]').should('be.visible')

        cy.get('[data-cy="activateButton"]').should('be.visible').click()

        todoItems.forEach(itemList => {
          cy.get('.MuiInputBase-input').click()
          cy.get('.MuiInputBase-input').type(itemList)
          cy.get('[data-cy="addButton"]').click()
          cy.get('.MuiInputBase-input').clear()
        });
      })
    })
    cy.visit('/')
  })

  it('Items should be in localStorage', () => {
    expect(JSON.parse(localStorage.getItem('TodoItems'))).length(5)
  });

  it('Checks todo items', () => {
    cy.get('[data-cy="listBox"]').each((item, index) => {
      cy.wrap(item).should('contain.text', todoItems[index])
    })
  });

  it('Should be in alphabetical order', () => {
    cy.get('[data-cy="orderButton"]').click()
  });

  it('Should delete all items and clear localStorage', () => {
    cy.get('[data-cy="deleteButton"]').click()
    cy.get('[data-cy="listBox"]').should('not.have.length', 2)
    cy.clearAllLocalStorage().should('be.null')
  });

});


