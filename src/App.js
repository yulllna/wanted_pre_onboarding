import React from 'react';
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <div className="left-wrap">
        <div><Toggle /></div>
        <div><Tab /></div>
        <div><Slider /></div>
      </div>
      <div className="right-wrap">
        <div><Input /></div>
        <div><Dropdown /></div>
      </div>
    </div>
  );
}

export default App;
