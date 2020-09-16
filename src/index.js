import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button 
      className="square"
      onClick={ props.onClick }
    >
      { props.value }
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [
        'X',
        'X',
        'X',
        '-',
        'X',
        'X',
        'X',
      ]
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = squares[i] == 'X' ? '-' : 'X';
    this.setState({
      squares: squares
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
      </div>
    );
  }
}

class CharacterBoard extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(
  <CharacterBoard />,
  document.getElementById('root')
);
