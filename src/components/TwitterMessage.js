import React from "react";

class TwitterMessage extends React.Component {
  
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    const newMessage = e.target.value
    this.setState({
      message: newMessage
    })    
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        <br/>{this.props.maxChars - this.state.message.length} characters left
      </div>
    );
  }
}

export default TwitterMessage;
