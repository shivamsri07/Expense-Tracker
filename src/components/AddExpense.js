import React, { useState, useContext } from 'react'
import { TransactionsContext } from '../context/TransactionContext';
import { v4 as uuidv4 } from 'uuid'

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionsContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}