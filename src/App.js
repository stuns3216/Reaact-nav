import React from 'react';
import Marwen from './componement/nav3'
import './App.css';
const navitems=[{name:'salah'},{name:'hmed'},{name:'3eljeya',drop:['1','2','3']}]
function App() {
  return (
    <div className="App">
      <Marwen marwen={navitems}/>
     
    </div>
  );
}

export default App;
