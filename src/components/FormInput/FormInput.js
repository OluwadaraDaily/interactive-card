import './FormInput.scss'

function FormInput({ type = 'text', label, placeholder = '', maxLength = "255" }) {
  return (
    <div className='input-div'>
      {label && <label className='label'>{ label }</label>} <br></br>
      <input type={type} className="input" placeholder={placeholder} maxLength={maxLength.toString()} />
    </div>
  )
}

export default FormInput