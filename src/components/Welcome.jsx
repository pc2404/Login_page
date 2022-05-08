import React from "react";

function Welcome(props) {
  return (
    <div className="welcome">
      <h1>
        Welcome {props.fName} {props.lName}
      </h1>
      <p>You are logged in with {props.email}</p>
      <h1>Thank You!</h1>
    </div>
  );
}

export default Welcome;
