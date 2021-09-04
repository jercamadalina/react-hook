import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import React, {useState} from "react";


function App() {
  const [inputUserName, setInputUserName] = useState('test-username'); 
  const [inputEmail, setInputEmail] = useState('');


  const usernameChangeHandler = (event) => {
    setInputUserName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  }

  return (
    <>
      Input Username: {inputUserName} <br />
      Input Mail: {inputEmail} <br />
      
      <UserInput 
        changed={usernameChangeHandler}
        changedEmail={emailChangeHandler} 
        userName={inputUserName}
        userEmail={inputEmail} 
      />

      <UserOutput
        userName={inputUserName}
        userEmail={inputEmail}/>
      
      <UserOutput
        userName={inputUserName}
        userEmail={inputEmail}/>
      
      <UserOutput
        userName="Gheorghe"
        userEmail="gheorghe@gmail.com"/>
    </>
  );
}

export default App;
