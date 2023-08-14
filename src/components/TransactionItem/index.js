import './index.css'

const TransactionItem = props => {
  const {item, deleteItem} = props
  const {id, title, amount, type} = item

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item">
      <p className="items">{title}</p>
      <p className="items">Rs {amount}</p>
      <p className="items">{type}</p>
      <div className="">
        <button
          data-testid="delete"
          className="btn"
          type="button"
          onClick={onDelete}
        >
          <img
            className="del-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
