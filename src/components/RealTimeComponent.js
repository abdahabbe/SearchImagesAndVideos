import React, { Component } from 'react';

class RealTimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    // Start the interval to update time every second
    this.timerID = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.timerID);
  }

  updateTime() {
    // Update the currentTime state every second
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>Current Time: {this.state.currentTime.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default RealTimeComponent;
