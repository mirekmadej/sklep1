import { useState } from 'react';
import './App.css';
import sliwka from './img/sliwka.png';
import jablko from './img/jablko.png';
import gruszka from './img/gruszka.png';
import Owoc from './Owoc';
const towary = [
  {nr:1, nazwa:"Jabłko", grafika:jablko, cena:1, sztuk:0},
  {nr:2, nazwa:"Gruszka", grafika:gruszka, cena:1.2, sztuk:0},
  {nr:3, nazwa:"Śliwka", grafika:sliwka, cena:0.4, sztuk:0},
];

function App() {
  let [sztuki, setSztuki] = useState(Array(3).fill(0));
  return (
    <div className="App">
      <h1>Sklep</h1>
      <Owoc owoc={towary[0]} />
      <Owoc owoc={towary[1]} />
      <Owoc owoc={towary[2]} />
      <div className='oblicz'>
        <p>{towary[0].nazwa} szt: {towary[0].sztuk}, 
          wartość: {towary[0].sztuk*towary[0].cena}</p>
        <p>{towary[1].nazwa} szt: {towary[1].sztuk}, 
          wartość: {towary[1].sztuk*towary[1].cena}</p>          
        <p>{towary[2].nazwa} szt: {towary[2].sztuk}, 
          wartość: {towary[2].sztuk*towary[2].cena}</p>  
        <h2>Razem:</h2>
      </div>
    </div>
  );
}

export default App;
