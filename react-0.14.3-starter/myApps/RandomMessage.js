//Stateful compenent
var RandomMessage = React.createClass({
  //Spcial method to set state
  getInitialState: function () {
    return {message: 'Hello, Universe!'}
  },
  //Event handler -- must be camel case
  _onClick: function () {
    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
    var randomMessage = messages[Math.floor((Math.random() * 3))];
    //Updates the compenent's state
    //Informs React about data change
    this.setState({message: randomMessage});
  },
  //Special method used to render component
  render: function () {
    return (
      <div>
        <MessageView message={this.state.message}/>
        <p><input type="button" onClick={this._onClick} value="Change Message"/></p>
      </div>
    )
  }
});

//Stateless compenent
var MessageView = React.createClass({
  render: function () {
    return (
      //poprs are imutable inside component
      <p>{this.props.message}</p>
    )
  }
});

ReactDOM.render(
<RandomMessage/>,
document.getElementById('greeting-div')
);
