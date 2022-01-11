import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextComponent from "./components/textComponent"

function App() {

  // const someText = null // can be changed

  const [someText, changeSomeText] = useState()

  // let tempVar = "This is a let variable" // cannot be changed

  const [textBool, changeBool] = useState(false);

  function textChange(text) {
    
    if(textBool) {
      // change the text to null
      changeSomeText(null)
      changeBool(false)
    }
    else { // text bool is false
      // change text to whatever string you want
      changeSomeText(text)
      changeBool(true)

    } 
    // else 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <TextComponent dumbText={someText} />

        <button onClick={() => textChange("This is some dumb text")}>See hidden text</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
