import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './muiTheme'
import Layout from './components/Layout'
import NumberInput2Words from './components/NumberInput2Words'

const muiTheme = getMuiTheme(MuiTheme)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <NumberInput2Words />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default App
