import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"First (Child Component)"} />
        <UserClass name={"Second (Child Component)"} />
      </div>
    );
  }
}

export default About;

/**
 *   Parent Constructor
     
     Parent Render
     
     First (Child Component) Child Constructor
     First (Child Component) Child Render
     Second (Child Component) Child Constructor
     Second (Child Component) Child Render
    
     First (Child Component) Child Component Did Mount
     Second (Child Component) Child Component Did Mount
    
     Parent Component Did Mount
 */
