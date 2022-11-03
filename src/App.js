import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    textInput: '',
    inputArrays: [],
  }

  onChangeTextValue = event => {
    this.setState({textInput: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {inputArrays, textInput} = this.state
    console.log(textInput)

    this.setState({
      inputArrays: [
        ...inputArrays,
        {id: v4(), text: textInput, count: textInput.length},
      ],
    })

    this.setState({textInput: ''})
  }

  render() {
    const {textInput, inputArrays} = this.state
    console.log(inputArrays)
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">Count the characters like a Boss..</h1>
          <div>
            {inputArrays.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-inputs-image"
              />
            ) : (
              <ul className="values-container">
                {inputArrays.map(arr => (
                  <li key={arr.id}>
                    <p className="input-text-items">
                      {arr.text}: {arr.count}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="input-container">
          <h1 className="character-heading">Character Counter</h1>
          <form onSubmit={this.onClickButton}>
            <input
              type="text"
              className="input-element"
              placeholder="Enter the characters here"
              value={textInput}
              onChange={this.onChangeTextValue}
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
