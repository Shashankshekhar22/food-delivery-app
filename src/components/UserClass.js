import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="user-card">
        <img src={this.props.avatar} width="200" height="200"></img>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Location: {this.props.bio}</h3>
        <h3>Contact: @aboutShashank</h3>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("child Component did Update ");
  }
}

export default UserClass;
