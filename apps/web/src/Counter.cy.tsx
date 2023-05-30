import Counter from './Counter'

describe('<Counter>', () => {
  it ('renders', () => {
    cy.mount(<Counter/>)
  })
})
