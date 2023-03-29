import React from 'react'
import TableButton from './TableButton'

describe('<TableButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TableButton />)
  })
})