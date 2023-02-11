import './DateInput.scss'

function DateInput({ label }) {
  return (
    <>
      <div className="inputs-container">
        <label className='label-text'>{ label }</label> <br/>
        <div className="inputs">
          <input type="number" className='month-input' placeholder='MM' />
          <input type="number" className='year-input' placeholder='YY'/>
        </div>
      </div>
    </>
  )
}

export default DateInput