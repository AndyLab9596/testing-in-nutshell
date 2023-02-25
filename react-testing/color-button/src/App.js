import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setdisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="enable-button-checkbox" >Disable button</label>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setdisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;