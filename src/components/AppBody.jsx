import React from 'react';
//styles
import "./AppBody.css";
import Transactions from './Transactions';
import TopExpenses from './TopExpenses';
//components

const AppBody = () => {
    return (
        <div className='AppBody'>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default AppBody;