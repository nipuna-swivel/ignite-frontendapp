import React from 'react'
import addEmployee from './add'

describe('<addEmployee />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<addEmployee />)
  })
})