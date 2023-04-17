import React from 'react'
import Buttonx from './button'

describe('<Buttonx />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttonx />)
  })
})