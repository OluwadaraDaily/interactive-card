import { useRef, useState } from 'react';
import './App.scss';
import backOfCreditCard from './images/bg-card-back.png'
import frontOfCreditCard from './images/bg-card-front.png'

function App() {
  const windowWidth = useState(window.innerWidth)
  return (
    <main className="app">
      <div className="top">
        <div className="back-of-credit-card-container">
          <img src={backOfCreditCard} className="back-of-credit-card" alt="Back of Credit Card" />
        </div>
        <div className="front-of-credit-card-container">
          <div style={{ position: 'relative' }}>
            <img src={frontOfCreditCard} className="front-of-credit-card" alt="Front of Credit Card" />
            <div className="front-details">
              <div className="top-details">
                <div className="circle big-circle"></div>
                <div className="circle small-circle"></div>
              </div>
              <div className="bottom-details">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </main>
  );
}

export default App;
