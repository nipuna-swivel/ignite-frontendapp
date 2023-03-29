import React from 'react'
import ListView from './list'

describe('<ListView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListView />)
  })
})