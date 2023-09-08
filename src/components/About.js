import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Something",
        location: "Default",
        avatar_url: "",
        info: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shashankshekhar22");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-3xl">About Us</h1>
        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={this.state.userInfo.name}
          bio={this.state.userInfo.bio}
          avatar={this.state.userInfo.avatar_url}
          location={this.state.userInfo.location}
        />
      </div>
    );
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("It will unmount once we go away from that view");
  }
}

export default About;

/**
 * ----Mounting---------
 *
 *  Constructor (dummy)
 *  Render (dummy)
 *  <HTML Dummy Data>
 * Component did mount
 * <API_CALL>
 * this.state update
 *
 *
 * ----Update
 *
 * Render (API Data)
 * <HTML (new API data)>
 * ComponentDidUpdate is called
 *
 */
