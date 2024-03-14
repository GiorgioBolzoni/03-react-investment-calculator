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

// const [investmentResults, setInvestmentResults] = useState([]);

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
          [inputIdentifier]: +newValue // il + modifica da stringa a numero
  };
});
    
    // setInvestmentResults(results);
}


  return (
    <>
      <UserInput userInputComponent={userInput} onChangeComponent={handleChange}/>
      <ResultsTable inputComponent={userInput} />
    </>
  )
}

export default App
