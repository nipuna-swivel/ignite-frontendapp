import React from 'react'
import AddButton from './AddButton'

describe('<AddButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddButton />)
  })
})