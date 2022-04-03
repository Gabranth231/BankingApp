import { createContext, useState, useEffect } from 'react';

const initialDataState = {
    userName: "John",
    balence: "100",
    userContacts: "",
    transactions: ""
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
        return dataObj.balence
    }
    function getTransactions(){
        return dataObj.balence
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
        // setDataObj((oldDataObj) => {
        //     let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
        //     prevDataObj.noEmployees = theNewNumber
        //     return prevDataObj
        // });
    }

    const context = {
        addUser:addUser,
        getUser:getUser,
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