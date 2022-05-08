import React, { useState } from "react";

function Input(props) {
  const [onMouse, setOnMouse] = useState(false);

  function onMouseIn() {
    setOnMouse(true);
  }
  function onMouseOut() {
    setOnMouse(false);
  }

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputHandle(event) {
    const { value, name } = event.target; //destructured

    setContact((prevValue) => ({ ...prevValue, [name]: value }));
  }
  function submitButton(event) {
    props.onSubmit(contact);
    props.PopOut();

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={inputHandle}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={inputHandle}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={inputHandle}
        />
        <button
          onClick={submitButton}
          style={{ backgroundColor: onMouse ? "black" : "white" }}
          onMouseOver={onMouseIn}
          onMouseOut={onMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
