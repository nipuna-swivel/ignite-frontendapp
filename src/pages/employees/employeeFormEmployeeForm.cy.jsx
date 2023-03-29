import React from 'react'
import EmployeeForm from './employeeForm'

describe('<EmployeeForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EmployeeForm />)
  })
})