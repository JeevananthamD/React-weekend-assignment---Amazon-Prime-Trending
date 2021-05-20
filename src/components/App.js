import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';
import Slide from "./Slide";


const App = () => {

  const [Index, setIndex] = useState(() => 0);

  return (
    <div>
      <Slide props={slides[Index]}/>
      <div>
        <button data-testid="button-restart" onClick={() => setIndex(0)}>Reset</button>
        {(Index)?<button data-testid="button-prev" onClick={() => setIndex(prevstate => prevstate - 1)}>Previous</button>:""}
        {(Index !== slides.length-1)?<button data-testid="button-next" onClick={() => setIndex(prevstate => prevstate + 1)}>Next</button>:""}
      </div>
    </div>
  )
}

export default App;
