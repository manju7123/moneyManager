import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="card-container">
      <div className="amount-card balance-card">
        <img
          className="amount-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="amount-inner-card">
          <p className="amount-type"> Your Balance </p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="amount-card income-card">
        <img
          className="amount-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="amount-inner-card">
          <p className="amount-type"> Your Income </p>
          <p data-testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="amount-card expenses-card">
        <img
          className="amount-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="amount-inner-card">
          <p className="amount-type"> Your Expenses </p>
          <p data-testid="expensesAmount" className="amount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
