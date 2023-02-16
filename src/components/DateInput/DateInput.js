import { useState } from 'react'
import './DateInput.scss'
function DateInput({ label, handleMonthOnChange, handleYearOnChange, getErrorStatus }) {
  const [monthError, setMonthError] = useState(false)
  const [yearError, setYearError] = useState(false)
  const monthCheck = (event) => {
    (event.target.value.length >= 2) ? setMonthError(false) : setMonthError(true)
    handleMonthOnChange(event)
    console.log(`CHECK 1 => ${monthError} - ${yearError}`)
    getErrorStatus(monthError && yearError)
  }
  const yearCheck = (event) => {
    (event.target.value.length >= 2) ? setYearError(false) : setYearError(true)
    handleYearOnChange(event)
    console.log(`CHECK 2 => ${monthError} - ${yearError}`)
    getErrorStatus(monthError && yearError)

  }
  return (
    <>
      <div className="inputs-container">
        <label className='label-text'>{ label }</label> <br/>
        <div className="inputs">
          <input 
            type="text" 
            className='month-input' 
            onChange={monthCheck} 
            placeholder='MM' 
            onBlur={monthCheck}
            onFocus={monthCheck}
            style={{ border: monthError ? '.1rem solid red' : '.1rem solid #cdcdcd'  }}
          />
          <input 
            type="text" 
            className='year-input' 
            onChange={yearCheck} 
            placeholder='YY'
            onBlur={yearCheck}
            onFocus={yearCheck}
            style={{ border: yearError ? '.1rem solid red' : '.1rem solid #cdcdcd'  }}
          />
        </div>
      </div>
    </>
  )
}

export default DateInput