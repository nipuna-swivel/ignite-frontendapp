import React from 'react'
import GridView from './employeeGridView'

describe('<GridView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GridView />)
  })
})