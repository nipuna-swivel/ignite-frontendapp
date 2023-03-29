import React from 'react'
import EmployeeListButton from './EmployeeListButton'

describe('<EmployeeListButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EmployeeListButton />)
  })
})