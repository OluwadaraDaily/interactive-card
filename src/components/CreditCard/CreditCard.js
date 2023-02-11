import './CreditCard.scss'
import frontOfCreditCard from '../../images/bg-card-front.png'

function CreditCard() {
  return (
    <div className="front-of-credit-card-container">
      <div style={{ position: 'relative' }}>
        <img src={frontOfCreditCard} className="front-of-credit-card" alt="Front of Credit Card" />
        <div className="front-details">
          <div className="top-details">
            <div className="circle big-circle"></div>
            <div className="circle small-circle"></div>
          </div>
          <div className="bottom-details">
            <div>
              <input type="number" className="card-number" placeholder='0000 0000 0000 0000' />
            </div>
            <div className="name-date-div">
              <input type="text" className="card-name" placeholder='JANE APPLEASED' />
              <input type="number" className="card-date" placeholder='00/00' />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard