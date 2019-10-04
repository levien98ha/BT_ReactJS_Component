import React from 'react';
import './App.css';
import Left from './leftApp/Left';
import Right from './rightApp/rightApp';

function App() {
  return (
    <div className="containerApp">
      <div className="left-app">
        <Left />
      </div>
      <div className="right-app">
        <Right />
      </div>
    </div>
  );
}

export default App;
