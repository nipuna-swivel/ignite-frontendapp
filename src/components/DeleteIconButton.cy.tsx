import React from 'react'
import DeleteIconButton from './DeleteIconButton'

describe('<DeleteIconButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DeleteIconButton />)
  })
})