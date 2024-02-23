import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import style from "./AppContainer.module.css"
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");
  function onButtonClick(buttonName) {
    if (buttonName === "C") {
      setCalVal("")
    }
    else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newValue = calVal + buttonName;
      setCalVal(newValue);
    }
  }

  return (
    <>
      <div className={`${style.container}`}>
        <Display displayValue={calVal} />
        <Buttons onClickHandler={onButtonClick} />
      </div>
    </>
  )
}

export default App;