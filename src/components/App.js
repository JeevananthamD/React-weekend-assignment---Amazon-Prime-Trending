import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';


const App = () => {

  const [Index, setIndex] = useState(0);

  const restar = () => {
    setIndex(0);
  }

  const prev = () => {
    setIndex(prevstate => prevstate - 1);
  }

  const next = () => {
    setIndex(prevstate => prevstate + 1);
  }

  return (
    <div className="App">
      <div id="slide">
        <h1 data-testid="title">{slides[Index].title}</h1>
        <p data-testid="text">{slides[Index].text}</p>
      </div>
      <div id="navigation">
        <button data-testid="button-prev" onClick={prev} disabled={(Index)?false:true}>Prev</button>
        <button data-testid="button-restart" onClick={restar} disabled={(Index)?false:true}>Restart</button>
        <button data-testid="button-next" onClick={next} disabled={(Index === slides.length-1)?true:false}>Next</button>
      </div>
    </div>
  )
}

export default App;
