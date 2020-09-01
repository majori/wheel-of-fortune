import React from "react";
import "./App.css";
import Start from "./Start";
import Game from "./Game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: [],
    };
  }

  componentDidMount() {
    this.setState({ sentence: "Guess this sentence" });
  }

  handleSetSentence() {}

  render() {
    const { sentence } = this.state;

    return (
      <div className="App">
        {sentence.length === 0 ? (
          <Start setSentence={this.handleSetSentence} />
        ) : (
          <Game sentence={sentence} />
        )}
      </div>
    );
  }
}

export default App;
