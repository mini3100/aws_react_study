import React, { useState } from 'react';
import Input from '../../components/Atom/Input/Input';

function CustomerInputTest(props) {
    const [ customer, setCustomer ] = useState({
        name: "",
        lank: "",
        age: ""
    });

    const handleCustomerInfoChange = (e) => {
        const { name, value } = e.target;
        setCustomer({
            ...customer,
            [name]: value
        })
    }

    return (
        <div>
            <h1>고객명: {customer.name}</h1>
            <h1>등급: {customer.lank}</h1>
            <h1>나이: {customer.age}</h1>
            <input type="text" name='name' onChange={handleCustomerInfoChange}/><br />
            <input type="text" name='lank' onChange={handleCustomerInfoChange}/><br />
            <input type="text" name='age' onChange={handleCustomerInfoChange}/><br />
        </div>
    );
}

export default CustomerInputTest;