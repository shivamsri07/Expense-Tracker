import React, { useEffect, useState, useContext } from 'react'
import { TransactionsContext } from '../context/TransactionContext';
import { v4 as uuidv4 } from 'uuid'
import {useAuth} from '../context/AuthProvider'

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {currentUser} = useAuth();
  const { addTransaction } = useContext(TransactionsContext);
  const [refresh, setRefresh] = useState('false')
  const onSubmit = e => {
    e.preventDefault();
    setRefresh(!refresh)
    if(text===''){
      alert("Please enter a transaction!")
      return;
    }
    const newTransaction = {
      uid: currentUser.email,
      id: uuidv4(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }


  useEffect(() => {
    setText('')
    setAmount(0)
  }, [refresh])

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