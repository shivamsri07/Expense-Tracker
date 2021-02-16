import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';


//Money formatter function
function moneyFormatter(num) {
  let p = parseFloat(num).toFixed(2).split('.');
  if (num < 0) {
    return (
      '-Rs ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    )

  }
  else {
    return ('Rs ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1])
  }

}

export const Balance = () => {
  const { allTransactions } = useContext(TransactionsContext);

  const amounts = allTransactions.map(allTransaction => allTransaction.amount);
  console.log(amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  )
}