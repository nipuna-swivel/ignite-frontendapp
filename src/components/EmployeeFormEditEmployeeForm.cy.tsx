import React from 'react'
import EditEmployeeForm from './EmployeeForm'

describe('<EditEmployeeForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EditEmployeeForm />)
  })
})