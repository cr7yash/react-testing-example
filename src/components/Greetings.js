import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello world</h1>
      {!changeText && <Output>You are good!</Output>}
      {/* <p>You are good!</p> */}

      {changeText && <Output>Hi there How are you??</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greetings;
