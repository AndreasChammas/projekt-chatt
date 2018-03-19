
// komponent för att lägga till meddelande i databasen som användaren skriver i inputfältet.
class ChattMsg extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputMessage: null
    };
    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(event) {
    this.setState({ inputMessage: event.target.value });
  }
  render() {
    return <div className="chatt-input">
      <input className="input-field" placeholder="Börja Chatta" onChange={this.onTextChange}></input>
      <button className="send-btn" onClick={() => {
        fetch('/gruppchatt', {
          body: '{ "userId": "ObjectID?", "text": "' + this.state.inputMessage + '", "time": "' + new Date() + '" }',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          console.log(result.ops[0].text);
        });
      }}>Send</button>
      </div>
  }
};

// komponent för att hämta databas collection "users" och sedan skriva ut det i chattbox diven.
class MsgOutput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
  }

componentDidMount() {
  fetch('/api/gruppchatt').then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result);
    this.setState({
      data: result
    });
  }.bind(this))
}

render() {
  return this.state.data.map(msg =>
      (
<<<<<<< HEAD
          <p key={msg._id}>username: {msg.text}</p>
=======
          <p class="p-chatt-styling" key={msg._id}>Username: {msg.message}</p>
>>>>>>> 40080f12a77179928b4dffcc3e19404159f17b57
      )
    )
  }
}



ReactDOM.render(
  <div className="chattwrapper">
    <div className="chattbox">
      <MsgOutput></MsgOutput>
    </div>
    <ChattMsg></ChattMsg>
  </div>,
  document.getElementById('app')
 );
