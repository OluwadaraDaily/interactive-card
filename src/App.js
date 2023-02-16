import { useEffect, useState } from 'react';
import './App.scss';
import CreditCard from './components/CreditCard/CreditCard';
import Form from './components/Form/Form';
import CreditCardBack from './components/CreditCardBack/CreditCardBack';

function App() {
  const initialStateErrorMessages = {
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  }
  const [errorMessages, setErrorMessages] = useState(initialStateErrorMessages)
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  useEffect(() => {
    console.log('Changed...')
    console.log('DATA ->', errorMessages)
  }, [errorMessages])

  const resetErrorMessage = async () => {
    setErrorMessages(initialStateErrorMessages)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await resetErrorMessage()
    if(cardName.length <= 0) {
      console.log('Entered here 1...')
      setErrorMessages(initialStateErrorMessages)
      setErrorMessages({...errorMessages, cardName: 'Add cardholder name'})
      console.log('After change =>', errorMessages)
    } else if (cardNumber.length !== 19) {
      setErrorMessages(initialStateErrorMessages)
      console.log('Entered here 2...')
      setErrorMessages({ ...errorMessages, cardNumber: 'Card number requires fourteen digits' })
    } else if(month.length !== 2) {
      setErrorMessages(initialStateErrorMessages)
      console.log('Entered here 3...')
      setErrorMessages({ ...errorMessages, month: 'Month requires two digits' })
    } else if(year.length !== 2) {
      setErrorMessages(initialStateErrorMessages)
      console.log('Entered here 4...')
      setErrorMessages({ ...errorMessages, year: 'Year requires two digits' })
    } else if(cvc.length !== 3) {
      setErrorMessages(initialStateErrorMessages)
      console.log('Entered here 5...')
      setErrorMessages({ ...errorMessages, cvc: 'CVC requires three digits' })
    } else {
      console.log('Entered here 6...')
      console.log('Submit Form...')
    }
  } 
  const handleNameChange = (e) => {
    setCardName(e.target.value.toUpperCase())
  }
  const handleCardNumberChange = (e) => {
    if (e.target.value.length > 0) {
      const numbersWithoutSpace = e.target.value.split(" ").join("").substr(0, 16)
      const arrayOfNumbersInFours = numbersWithoutSpace.match(/.{1,4}/g);
      e.target.value = arrayOfNumbersInFours.join(' ')
      
      setCardNumber(e.target.value)
    } else {
      setCardNumber('')
    }
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
        <CreditCard className='front-of-credit-card' cardName={cardName} cardNumber={cardNumber} month={month} year={year}/>
      </div>
      <div className="bottom">
        <Form 
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleCardNumberChange={handleCardNumberChange}
          handleMonthOnChange={handleMonthOnChange}
          handleYearOnChange={handleYearOnChange}
          handleCvcOnChange={handleCvcOnChange}
          errorMessages={errorMessages}
        />
        {/* <CompletePage/> */}
      </div>
    </main>
  );
}

export default App;
