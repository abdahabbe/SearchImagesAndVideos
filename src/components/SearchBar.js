import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{backgroundColor: "#00FFFF"}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>{this.props.label}</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
