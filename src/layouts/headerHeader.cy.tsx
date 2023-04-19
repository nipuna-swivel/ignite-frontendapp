import React from 'react'
import HeaderBar from './HeaderBar'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeaderBar />)
  })
})