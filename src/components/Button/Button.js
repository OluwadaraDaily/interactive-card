import './Button.scss'

const Button = ({ type = 'button', btnText, handleClick = () => {}, disabled = false }) => {
  console.log('Check Disabled =>', disabled)
  return (
    <button className='btn' type={type} onClick={handleClick} disabled={disabled}>{ btnText }</button>
  )
}

export default Button;