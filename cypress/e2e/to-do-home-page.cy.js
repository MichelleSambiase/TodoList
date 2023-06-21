/* eslint-disable cypress/unsafe-to-chain-command */
Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload

const todoItems = [
  'Pan',
  'Aceite',
  'Agua',
  'Harina',
  'Huevo',
  'Pan lactal'
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
    expect(JSON.parse(localStorage.getItem('TodoItems'))).length(6)
  });

  it('Checks todo items', () => {
    todoItems.forEach(itemList => {
      cy.get('[data-cy="listBox"]').should('contain.text', itemList)
    })
  });

  // it.only('Should be in alphabetical order', () => {
  //   let compareArray = []
  //   cy.get('[data-cy="orderButton"]').click()
  //   for (let index = 0; index < todoItems.length; index++) {
  //     cy.get(`:nth-child(${index + 1}) > .MuiListItem-root`).then((element) => {
  //       compareArray.push(element.text().trim())
  //     }).then(() => {
  //       if (compareArray.length === todoItems.length)
  //         expect(compareArray).to.deep.equal(todoItems.toSorted())
  //     })
  //   }
  // });
  it.only('Should be in alphabetical order', () => {
    cy.get('[data-cy="orderButton"]').click();
    const compareArray = [];

    cy.get('.MuiListItem-root').each((element) => {
      compareArray.push(element.text().trim())
    }).then(() => {
      const sortedArray = compareArray.slice().sort();

      expect(compareArray).to.deep.equal(sortedArray);
    });
  });


  it('Should delete all items and clear localStorage', () => {
    cy.get('[data-cy="deleteButton"]').click()
    cy.get('[data-cy="listBox"]').should('not.have.length', 2)
    cy.clearAllLocalStorage().should('be.null')
  });

});


