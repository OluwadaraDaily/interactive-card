import './FormInput.scss'

function FormInput(
    { 
      type = 'text', 
      label,
      placeholder = '',
      maxLength = "255",
      handleOnChange, 
      handleOnFocus,
      handleOnBlur,
      error = false 
    }
  ) {
  return (
    <div className='input-div'>
      {label && <label className='label'>{ label }</label>} <br/>
      <input 
        type={type}
        className="input"
        placeholder={placeholder}
        maxLength={maxLength.toString()}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={{ border: error ? '.1rem solid red' : '.1rem solid #cdcdcd'  }}  
      />
    </div>
  )
}

export default FormInput