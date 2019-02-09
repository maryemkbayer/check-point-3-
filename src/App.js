import React, { Component } from 'react';
import './App.css';
import Box from './box';
import momo from "./momo.jpg"
import nojo from "./nojo.jpeg"
import lopo from "./1.jpg"
import chiwawa from "./chiwawa.jpg"

class App extends Component {
  render() {
    return (
      <header className="coco">
      
      <div className="all">
      <h1 className="header"> nos chiens</h1>
      <div className="box">
        <Box name="this is momo" img={momo} />
        <Box name="this is nojo"  img={nojo}/>
        <Box name="this is lopo" img={lopo}/>
        <Box name="this is chiwawa"img={chiwawa}/>
      </div>
      </div>
      </header>
     
        
    );
  }
}

export default App;
