import './CreditCardBack.scss'
import backOfCreditCard from '../../images/bg-card-back.png'

const CreditCardBack = ({ cvc }) => {
  return(
    <div className="back-of-credit-card-container">
      <div className='inner-div'>
        <img src={backOfCreditCard} className="back-of-credit-card" alt="Back of Credit Card" />
        <input type="text" value={cvc} className='cvc-input' placeholder='000' readOnly/>  
      </div>
    </div>
  )
}

export default CreditCardBack