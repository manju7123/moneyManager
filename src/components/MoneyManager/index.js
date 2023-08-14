import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteItem = id => {
    const {transactionList} = this.state
    const filteredItems = transactionList.filter(each => each.id !== id)
    this.setState({
      transactionList: filteredItems,
    })
  }

  getIncome = () => {
    const {transactionList} = this.state
    let totalIncome = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      }
    })
    return totalIncome
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let totalExpenses = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        totalExpenses += each.amount
      }
    })
    return totalExpenses
  }

  getBalance = () => {
    const {transactionList} = this.state
    let totalBalance = 0
    let totalIncome = 0
    let totalExpenses = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      } else {
        totalExpenses += each.amount
      }
    })
    totalBalance = totalIncome - totalExpenses
    return totalBalance
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const reqType = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = reqType
    const intAmount = parseInt(amountInput)

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: intAmount,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onTitleChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmountChange = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeOption = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  render() {
    const {transactionList, titleInput, amountInput, optionId} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="name-heading"> Hi,Richard </h1>
          <p className="description">
            Welcome back to your
            <span className="span-element">Money Manager </span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="transactions-card">
          <form className="form-card" onSubmit={this.onAddTransaction}>
            <h1 className="form-heading"> Add Transaction </h1>
            <label className="form-label" htmlFor="titleId">
              TITLE
            </label>
            <input
              className="form-input"
              id="titleId"
              type="text"
              placeholder="TITLE"
              onChange={this.onTitleChange}
              value={titleInput}
            />
            <label className="form-label" htmlFor="amountId">
              AMOUNT
            </label>
            <input
              className="form-input"
              id="amountId"
              type="text"
              placeholder="AMOUNT"
              onChange={this.onAmountChange}
              value={amountInput}
            />
            <label className="form-label" htmlFor="typeId">
              TYPE
            </label>
            <select
              className="form-input"
              id="typeId"
              value={optionId}
              onChange={this.onChangeOption}
            >
              {transactionTypeOptions.map(each => (
                <option className="" key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-card">
            <h1 className="history-heading"> History </h1>
            <ul className="list-items">
              <li className="item">
                <p className="item-title"> Title </p>
                <p className="item-amount"> Amount </p>
                <p className="item-type"> Type </p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  item={each}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
