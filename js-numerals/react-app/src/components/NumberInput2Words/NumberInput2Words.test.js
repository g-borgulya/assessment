import React from 'react'
import renderer from 'react-test-renderer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NumberInput2Words from './NumberInput2Words'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <NumberInput2Words />
      </MuiThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
