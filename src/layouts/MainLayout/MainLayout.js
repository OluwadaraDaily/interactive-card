import CreditCard from '../../components/CreditCard/CreditCard'
import CreditCardBack from '../../components/CreditCardBack/CreditCardBack'
import Form from '../../components/Form/Form'
import './MainLayout.scss'
import { useState } from 'react';
import CompletePage from '../../pages/CompletePage/CompletePage';

function MainLayout() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [submitForm, setSubmitForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitForm(!submitForm)
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
  const resetCardDetails = () => {
    setCardName('')
    setCardNumber('')
    setMonth('')
    setYear('')
    setCvc('')
  }
  const handleContinueOnClick = () => {
    setSubmitForm(!submitForm)
    resetCardDetails()
  }
  return (
    <main className="app">
      <div className="top">
        <CreditCardBack className='back-of-credit-card-container' cvc={cvc}/>
        <CreditCard className='front-of-credit-card' cardName={cardName} cardNumber={cardNumber} month={month} year={year}/>
      </div>
      <div className="bottom">
        { !submitForm && <Form 
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleCardNumberChange={handleCardNumberChange}
          handleMonthOnChange={handleMonthOnChange}
          handleYearOnChange={handleYearOnChange}
          handleCvcOnChange={handleCvcOnChange}
          className="form"
        /> }
        { submitForm && <CompletePage handleOnClick={handleContinueOnClick}/> }
      </div>
    </main>
  )
}

export default MainLayout