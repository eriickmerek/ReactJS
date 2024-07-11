import { useState } from "react";
////////// Components //////////
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

//Default user inputs
const defaultFormValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [ formValues, setFormValues ] = useState(defaultFormValues);

  function isFloat(n) {
    n = parseFloat(n);
    return !isNaN(n);
  }

  function handleInputChange(inputID, inputValue) {
    //Default is the previous value
    let numericInputValue = formValues[inputID];

    if(isFloat(inputValue)){
      numericInputValue = parseFloat(inputValue);
    }

    setFormValues(prevFormVal => {
      return {
          ...prevFormVal,
          [inputID]: numericInputValue
      };
    });
  }

  return <main>
    <Header></Header>
    <UserInput 
      onInputChange={handleInputChange} 
      formValues={formValues}
    />
    <Results formValues={formValues} />
  </main>
}

export default App;
