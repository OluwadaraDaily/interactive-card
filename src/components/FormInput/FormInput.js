import './FormInput.scss'

function FormInput({ type = 'text', label, placeholder = '', maxLength = "255", handleOnChange }) {
  return (
    <div className='input-div'>
      {label && <label className='label'>{ label }</label>} <br/>
      <input type={type} className="input" placeholder={placeholder} maxLength={maxLength.toString()} onChange={handleOnChange} />
    </div>
  )
}

export default FormInput