var React = require('react');
//Top most compenent
var MessageContainer = React.createClass({
  //Spcial method to set state
  getInitialState: function () {
    return {messages: []}
  },
  //Event handler -- must be camel case
  addMessage: function (message) {
    //Updates the compenent's state
    //Informs React about data change
    this.setState({
      messages: this.state.messages.concat([message])
    });
  },
  //Special method used to render component
  render: function () {
    // Render two other components and pass them props
    return (
      <div>
        <ListMessages messages={this.state.messages}/>
        <AddMessage addMsg={this.addMessage}/>
      </div>
    )
  }
});

var AddMessage = React.createClass({
  getInitialState: function () {
    return {
      newMsg: ''
    }
  },
  //Validates a props type
  propTypes: {
    //Make sure addMsg is a method
    addMsg: React.PropTypes.func.isRequired
  },
  //Updates newMsg as the user types
  updateMessage: function (e) {
    this.setState({newMsg: e.target.value});
  },
  //Adds new message via callback
  addMessage: function () {
    this.props.addMsg(this.state.newMsg);
    //Sets newMsg back to default
    this.setState({
      newMsg: ''
    });
  },
  render: function () {
    return (
      <div>
        <input type='text' value={this.state.newMsg} onChange={this.updateMessage} />
        <button onClick={this.addMessage}>Send</button>
      </div>
    )
  }
});

//Lists all messages (include lifecycle events)
var ListMessages = React.createClass({
    //Create default values for porps
    getDefaultProps: function () {
      return {
        messages: []
      }
    },
    // Invoked once before first render
    componentWillMount: function(){
      // Calling setState here does not cause a re-render
        console.log('In Component Will Mount');
    },
    // Invoked once after the first render
    componentDidMount: function(){
        // You now have access to this.getDOMNode()
        console.log('In Component Did Mount');
    },
    // Invoked whenever there is a prop change
    // Called BEFORE render
    componentWillReceiveProps: function(nextProps){
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an additional re-render
        console.log('In Component Will Receive Props');
    },
    // Called IMMEDIATELY before a component is unmounted
    componentWillUnmount: function(){

    },
    render: function () {
    //Formats each message
    var listItems = this.props.messages.map(function(msg){
      return <li> {msg} </li>;
    });
    //Renders a list of messages
    return (
      <div>
        <h3> Messages: </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
<MessageContainer/>,
document.getElementById('greeting-div')
);
