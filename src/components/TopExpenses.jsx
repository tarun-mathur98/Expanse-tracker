import React from 'react';
//styles
//styles
import "./Transactions.css";
import TopExpenseBody from './TopExpenseBody';

const TopExpenses = () => {
    return (
        <div className='Transactions'>
            <h2>Top Expenses</h2>
            <TopExpenseBody />
        </div>
    );
};

export default TopExpenses;