import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters : [

        ]
    }

    removeCharacter = index => {
  const { characters } = this.state
  this.setState({
    characters: characters.filter((character, i) => { //testing an index vs. all the indices in the array, and returning all but the one that is passed through
      return i !== index
    }),
  })
}

handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
} 

  render() {
    return (
      <div className="container">
      <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}  />
      <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App