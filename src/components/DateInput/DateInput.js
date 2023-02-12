import './DateInput.scss'

function DateInput({ label, handleMonthOnChange, handleYearOnChange }) {
  return (
    <>
      <div className="inputs-container">
        <label className='label-text'>{ label }</label> <br/>
        <div className="inputs">
          <input type="text" className='month-input' onChange={handleMonthOnChange} placeholder='MM' />
          <input type="text" className='year-input' onChange={handleYearOnChange} placeholder='YY'/>
        </div>
      </div>
    </>
  )
}

export default DateInput