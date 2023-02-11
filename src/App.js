// import { useState } from 'react';
import './App.scss';
import backOfCreditCard from './images/bg-card-back.png'
import CreditCard from './components/CreditCard/CreditCard';
import Form from './components/Form/Form';
import CompletePage from './pages/CompletePage/CompletePage';

function App() {
  const completed = false
  return (
    <main className="app">
      <div className="top">
        <div className="back-of-credit-card-container">
          <img src={backOfCreditCard} className="back-of-credit-card" alt="Back of Credit Card" />
        </div>
        <CreditCard></CreditCard>
      </div>
      <div className="bottom">
        { !completed && <Form/> }
        { completed && <CompletePage/> }
      </div>
    </main>
  );
}

export default App;
