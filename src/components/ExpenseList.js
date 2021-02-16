import React, { useState, useContext } from 'react';
import { Expense } from './Expense';
import { TransactionsContext } from '../context/TransactionContext';


export const ExpenseList = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Show');

  const clickHandler = () => {
    setShow(!show)
    if (name === 'Show') {
      setName('Hide')
    }
    else {
      setName('Show')
    }
  }

  return (
    <>
      <button className="btn" onClick={clickHandler}>{name} Expenses</button>
      {show && <History />}
    </>
  )
}
const History = () => {
  const { allTransactions } = useContext(TransactionsContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {allTransactions.map(transaction => (<Expense key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
