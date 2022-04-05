import { createContext, useState, useEffect } from 'react';

const initialDataState = {
    userName: "John",
    balence: "100",
    userContacts: "Mike",
    transactions: "20"
}
const DataContext = createContext(initialDataState);


export function DataContextProvider(props) {
    const [dataObj, setDataObj] = useState(initialDataState);
    // see https://nextjs.org/docs/basic-features/data-fetching/client-side
    
    useEffect(() => {
       fetch('api/getUser')
       .then((res) => res.json())
       .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.userName = data.userName
                prevDataObj.balence = data.balence
                prevDataObj.userContacts = data.userContacts
                prevDataObj.transactions = data.transactions
                return prevDataObj
            })
       })
    },[]);

    function getUser(){
        return dataObj.userName
    }
    function getBalence(){
        return dataObj.balence
    }
    function getUserContacts(){
        return dataObj.userContacts
    }
    function getTransactions(){
        return dataObj.transactions
    }
    async function addUser(data)  {
        const response = await fetch('api/addUser', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    userName: data,
                    balence:  "100",
                    userContacts: "",
                    transactions: ""
                }
            ) 
        });
    }
    async function addContact(data)  {
        const response = await fetch('api/addContact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    userName: data.userName,
                    contactName: data.contactName
                }
            ) 
        });
    }

    const context = {
        addUser:addUser,
        getUser:getUser,
        addContact:addContact,
        getBalence:getBalence,
        getTransactions:getTransactions,
        getUserContacts:getUserContacts
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;