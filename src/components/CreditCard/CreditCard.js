import './CreditCard.scss'
import frontOfCreditCard from '../../images/bg-card-front.png'

function CreditCard({ cardName, cardNumber, month, year }) {
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
              <input type="text" className="card-number" value={cardNumber} placeholder='0000 0000 0000 0000' readOnly/>
            </div>
            <div className="name-date-div">
              <input type="text" value={cardName} className="card-name" placeholder='JANE APPLEASED' readOnly/>
              <div className="dates">
                <input type="text" value={month} className="card-date" placeholder='00' readOnly/>
                <span className='divider'>/</span>
                <input type="text" value={year} className="card-date" placeholder='00' readOnly/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard