/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Add', () => {
    cy.get('[data-cy="add-input"]').type('New Todo');
    cy.get('[data-cy="add-button"]').click();

    cy.get('[data-cy="todo-New Todo"]').should('exist');
  });

  it('Remove', () => {
    cy.get('[data-cy="todo-Go shopping"] > button').click();

    cy.get('[data-cy="todo-Go shopping"]').should('not.exist');
  });
});
