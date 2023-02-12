import './Form.scss'
import FormInput from '../FormInput/FormInput'
import DateInput from '../DateInput/DateInput'
import Button from '../Button/Button'
// import { useState } from 'react'

function Form({ handleSubmit, handleNameChange, handleCardNumberChange, handleMonthOnChange, handleYearOnChange, handleCvcOnChange }) {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormInput label="CARDHOLDER NAME" handleOnChange={handleNameChange} placeholder='e.g Jane Appleseed'/>
        <FormInput label="Card Number" handleOnChange={handleCardNumberChange} placeholder='e.g 1234 5678 9012 3456'/>
        <div className="date-cvc-row">
          <div className="date">
            <DateInput 
              label="Exp. Date (MM/YY)"
              handleMonthOnChange={handleMonthOnChange}
              handleYearOnChange={handleYearOnChange}
            />
          </div>
          <div className="cvc">
            <FormInput label="CVC" handleOnChange={handleCvcOnChange} placeholder='e.g 123' />
          </div>
        </div>
        <Button btnText="Confirm" type='submit' />
      </form>
    </div>
  )
}

export default Form
