import { useState } from "react";

import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"
// import { calculateInvestmentResults } from "./util/investment"
function App() {
  const [userInput, setUserInput]= useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
});



function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
          [inputIdentifier]: +newValue // il + modifica da stringa a numero
  };
});
    
}

  const inputIsValid = userInput.initialInvestment >= 0 && userInput.annualInvestment >= 0 && userInput && userInput.expectedReturn >= 0 && userInput.duration >= 1;

  return (
    <>
      <UserInput userInputComponent={userInput} onChangeComponent={handleChange}/>
      {inputIsValid && <ResultsTable inputComponent={userInput} /> }
      {!inputIsValid && <p className="center fw-bold">Please, enter valid data</p>}
    </>
  )
}

export default App
