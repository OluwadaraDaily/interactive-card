import './Form.scss'
import FormInput from '../FormInput/FormInput'
import DateInput from '../DateInput/DateInput'
import Button from '../Button/Button'
import { useState } from 'react'

function Form({ handleSubmit, handleNameChange, handleCardNumberChange, handleMonthOnChange, handleYearOnChange, handleCvcOnChange }) {
  const [nameError, setNameError] = useState(true)
  const [cardNumberError, setCardNumberError] = useState(true)
  const [cvcError, setCvcError] = useState(true)
  const [dateFieldError, setDateFieldError] = useState(true)

  const nameCheck = (event) => {
    (event.target.value.length <= 0) ? setNameError(true) : setNameError(false)
    handleNameChange(event)
  }
  const cardNumberCheck = (event) => {
    (event.target.value.length >= 19) ? setCardNumberError(false) : setCardNumberError(true)
    handleCardNumberChange(event)
  }
  const cvcCheck = (event) => {
    (event.target.value.length >= 3) ? setCvcError(false) : setCvcError(true)
    handleCvcOnChange(event)
  }
  const getErrorStatus = (dateFieldsErrorStatus) => {
    setDateFieldError(dateFieldsErrorStatus)
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="CARDHOLDER NAME" 
          handleOnChange={nameCheck} 
          placeholder='e.g Jane Appleseed' 
          error={nameError}
          handleOnBlur={nameCheck}
          handleOnFocus={nameCheck}
        />
        <FormInput 
          label="Card Number" 
          handleOnChange={cardNumberCheck} 
          placeholder='e.g 1234 5678 9012 3456' 
          error={cardNumberError}
          handleOnBlur={cardNumberCheck}
          handleOnFocus={cardNumberCheck}
        />
        <div className="date-cvc-row">
          <div className="date">
            <DateInput 
              label="Exp. Date (MM/YY)"
              handleMonthOnChange={handleMonthOnChange}
              handleYearOnChange={handleYearOnChange}
              getErrorStatus={getErrorStatus}
            />
          </div>
          <div className="cvc">
            <FormInput 
              label="CVC" 
              handleOnChange={cvcCheck} 
              placeholder='e.g 123' 
              error={cvcError}
              handleOnBlur={cvcCheck}
              handleOnFocus={cvcCheck}
            />
          </div>
        </div>
        <Button btnText="Confirm" type='submit' disabled={(dateFieldError === false && cvcError === false && cardNumberError === false && nameError === false) ? false : true} />
      </form>
    </div>
  )
}

export default Form
