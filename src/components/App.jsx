import React, { useState } from "react";
import Input from "./Input";
import Welcome from "./Welcome";

function App() {
  const [pop, setPop] = useState(true);
  function PopOut() {
    setPop(false);
  }

  const [ContactInfo, setContactInfo] = useState([]);

  function handleSubmit(contact) {
    setContactInfo((prevValue) => {
      return [...prevValue, contact];
    });
  }

  return (
    <div>
      {pop && <Input onSubmit={handleSubmit} PopOut={PopOut} />}
      {ContactInfo.map((props) => {
        return (
          <Welcome
            fName={props.fName}
            lName={props.lName}
            email={props.email}
          />
        );
      })}
    </div>
  );
}

export default App;
