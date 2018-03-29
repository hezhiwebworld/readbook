const A = 65;

class Alphabet extends React.Component {
  constructor() {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClick :  null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(letter) {
    this.setState({
      justClick: letters
    })
  }

  render() {
    return (
      <div>
         just clicked: {this.state.justClicked }
         <ul>
           {
             this.state.letters.map( letter => 
                <li key={letter} onClick={() => this.handleClick(letter)}>
                 {letter}
                </li>
            )}
         </ul>
      </div>
    )
  }
}