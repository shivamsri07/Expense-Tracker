import React, { useState, useEffect, createContext } from 'react';
import { create, list, remove } from '../firebasedb';
import { useAuth } from './AuthProvider';

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {

    const [transactions, setTransactions] = useState([]);
    const [allTransactions, setAllTransactions] = useState([]);
    const {currentUser} = useAuth()
    const loadStorage = async () => {
        if(currentUser){
        const records = await list(currentUser.email);
        setAllTransactions(records)
        }
    }



    const addTransaction = async ({ uid, id, text, amount }) => {

        const payload = {
            uid,
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
    const deleteTransaction = async (key, uid) => {
        await remove(key, uid)
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