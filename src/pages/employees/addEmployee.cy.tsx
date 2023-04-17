import React from 'react'
import addEmployee from './addEmployee'

describe('<addEmployee />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<addEmployee />)
  })
})