import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';
import {useAuth} from '../context/AuthProvider'

//Money formatter function
function moneyFormatter(num) {
  let p = parseFloat(num).toFixed(2).split('.');
  return (
    'RS ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Expense = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionsContext);
  const {currentUser} = useAuth()
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id, currentUser.email)} className="delete-btn">x</button>
    </li>
  )
}