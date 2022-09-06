import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [age, setAge] = useState("");
  const [heartRate, setHeartRate] = useState("");
  function heartRatCalculator() {
    const upperLimit = parseInt((220 - age) * 0.85);
    const lowerLimit = parseInt((220 - age) * 0.65);
    setHeartRate(lowerLimit + "-" + upperLimit);
  }
  return (
    <div className="container">
      <form>
        <label> Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Heart Rate</label>
        {/* <output> hearteRate : {hearteRate} </output> */}
        <input type="text" value={heartRate} />
        <button type="button" onClick={heartRatCalculator}>
          Calculate
        </button>
      </form>
    </div>
  );
}
export default App;
