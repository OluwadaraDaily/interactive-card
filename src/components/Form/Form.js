import './Form.scss'
import FormInput from '../FormInput/FormInput'
import DateInput from '../DateInput/DateInput'
import Button from '../Button/Button'

function Form() {
  const handleSubmit = (e) => {
    console.log('Event =>', e)
    e.preventDefault()
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormInput label="CARDHOLDER NAME" placeholder='e.g Jane Appleseed'/>
        <FormInput type="number" label="Card Number" placeholder='e.g 1234 5678 9012 3456'/>
        <div className="date-cvc-row">
          <div className="date">
            <DateInput label="Exp. Date (MM/YY)"/>
          </div>
          <div className="cvc">
            <FormInput type="number" label="CVC" placeholder='e.g 123' />
          </div>
        </div>
        <Button btnText="Confirm" type='submit' />
      </form>
    </div>
  )
}

export default Form
