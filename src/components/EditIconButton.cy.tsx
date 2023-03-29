import React from 'react'
import EditIconButton from './EditIconButton'

describe('<EditIconButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EditIconButton />)
  })
})