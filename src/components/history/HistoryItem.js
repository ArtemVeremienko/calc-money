import React from 'react'

function HistoryItem({transaction, deleteTransaction}) {
  return (
    <li 
      className={`history__item ${transaction.isAdd ? 'history__item-plus' : 'history__item-minus'}`}>
      {transaction.description}
        <span className="history__money">{transaction.amount} ₽</span>
        <button className="history__delete" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default HistoryItem;