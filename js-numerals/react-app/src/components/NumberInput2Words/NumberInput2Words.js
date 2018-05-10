import React from 'react'
import TextField from 'material-ui/TextField'
import Number2Words from '../../utils/number2words'
import './NumberInput2Words.css'

class NumberInput2Words extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      output: '',
      error: ''
    }
    this.converter = new Number2Words()
  }

  handleChange = event => {
    const { value: input } = event.target
    try {
      const output = this.converter.setNumber(input)
      this.setState({
        input,
        output,
        error: ''
      })
    } catch(e) {
      this.setState({
        input,
        output: '',
        error: e.message
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inputcell">
          <TextField
            floatingLabelText="Positive integer"
            id="numberInput"
            value={this.state.input}
            onChange={this.handleChange}
            errorText={this.state.error}
            />
        </div>
        <div className="outputcell">
          {this.state.output}
        </div>
      </div>
    )
  }
}

export default NumberInput2Words
