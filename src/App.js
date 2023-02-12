import { useState } from 'react';
import './App.scss';
import backOfCreditCard from './images/bg-card-back.png'
import CreditCard from './components/CreditCard/CreditCard';
import Form from './components/Form/Form';
import CreditCardBack from './components/CreditCardBack/CreditCardBack';
// import CompletePage from './pages/CompletePage/CompletePage';

function App() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  } 
  const handleNameChange = (e) => {
    setCardName(e.target.value.toUpperCase())
  }
  const handleCardNumberChange = (e) => {
    const numbersWithoutSpace = e.target.value.split(" ").join("").substr(0, 16)
    const arrayOfNumbersInFours = numbersWithoutSpace.match(/.{1,4}/g);
    e.target.value = arrayOfNumbersInFours.join(' ')
    
    setCardNumber(e.target.value)
  }
  const handleMonthOnChange = (e) => {
    e.target.value = e.target.value.substr(0,2)
    setMonth(e.target.value)
  }
  const handleYearOnChange = (e) => {
    e.target.value = e.target.value.substr(0,2)
    setYear(e.target.value)
  }

  const handleCvcOnChange = (e) => {
    e.target.value = e.target.value.substr(0,3)
    setCvc(e.target.value)
  }

  return (
    <main className="app">
      <div className="top">
        <CreditCardBack className='back-of-credit-card-container' cvc={cvc}/>
        <CreditCard cardName={cardName} cardNumber={cardNumber} month={month} year={year}/>
      </div>
      <div className="bottom">
        <Form 
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleCardNumberChange={handleCardNumberChange}
          handleMonthOnChange={handleMonthOnChange}
          handleYearOnChange={handleYearOnChange}
          handleCvcOnChange={handleCvcOnChange}
        />
        {/* <CompletePage/> */}
      </div>
    </main>
  );
}

export default App;
