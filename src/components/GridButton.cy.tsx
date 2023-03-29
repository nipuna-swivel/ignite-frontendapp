import React from 'react'
import GridButton from './GridButton'

describe('<GridButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GridButton />)
  })
})