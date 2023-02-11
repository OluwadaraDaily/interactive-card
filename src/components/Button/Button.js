import './Button.scss'

const Button = ({ type = 'button', btnText, handleClick = () => {} }) => {
  return (
    <button className='btn' type={type} onClick={handleClick}>{ btnText }</button>
  )
}

export default Button;