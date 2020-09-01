import React from 'react';
import _ from 'lodash';
import './Game.css';
import Slot from './Slot';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sentence: _.toUpper(props.sentence),
      slots: _.chain(props.sentence)
        .toUpper()
        .split('')
        .value(),
      guessed: new Set(),
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if ('abcdefghijklmnopqrstuvwxyzåäö'.split('').includes(event.key)) {
        this.setState({ guessed: this.state.guessed.add(_.toUpper(event.key))});
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown')
  }

  render() {
    const { slots, guessed, sentence } = this.state;
    console.log(slots)
    console.log(sentence)
    console.log(guessed)

    return (
      <div className="game">
        <div className="slots-wrapper-1">
          <div className="slots-wrapper-2">
            <div className="slots">
              { _.map(slots, (letter) => (
                <Slot letter={letter} opened={guessed.has(letter)} />
              ))}
            </div>
          </div>
        </div>
        <div className="guessed">
          { _.reject(Array.from(guessed), letter => _.includes(sentence, letter)) }
        </div>
      </div>
    );
  }
}

export default Game;
