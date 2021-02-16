import React, { useState, useEffect, createContext } from 'react';
import { create, list, remove } from '../firebasedb';

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {

    const [transactions, setTransactions] = useState([]);
    const [allTransactions, setAllTransactions] = useState([]);

    const loadStorage = async () => {
        const records = await list();
        setAllTransactions(records)
    }



    const addTransaction = async ({ id, text, amount }) => {

        const payload = {
            id,
            text,
            amount
        }

        const data = await create(payload)

        setTransactions([
            ...transactions,
            data
        ]);

    }
    const deleteTransaction = async (key) => {
        await remove(key)
        setTransactions(transactions.filter(u => u.key !== key));
    }


    useEffect(() => {
        loadStorage();
    }, [allTransactions]);

    return (
        <TransactionsContext.Provider value={{ allTransactions, transactions, addTransaction, deleteTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export default TransactionsContextProvider;