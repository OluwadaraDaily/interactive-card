import './CompletePage.scss'
import completeIcon from '../../images/icon-complete.svg'
import Button from '../../components/Button/Button';
function CompletePage({ handleOnClick }) {
  return (
    <>
      <div className="complete-page-container">
        <div className="img">
          <img src={completeIcon} alt="Form Completed Icon" />
        </div>
        <div className="text-section">
          <h1 className="title">Thank You!</h1>
          <p className="text">We've added your card details</p>
        </div>
        <Button btnText="Continue"  handleClick={handleOnClick}/>
      </div>
    </>
  )
}

export default CompletePage;