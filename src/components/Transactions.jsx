import React from 'react';
//styles
import "./Transactions.css";
//components
import TransactionsBody from './TransactionsBody';

const Transactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionsBody />
        </div>
    );
};

export default Transactions;