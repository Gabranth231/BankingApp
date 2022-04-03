import { createContext, useState, useEffect } from 'react';


const DataContext = createContext();


export function DataContextProvider(props) {

    // see https://nextjs.org/docs/basic-features/data-fetching/client-side
    function getUser() {
        return dataObj.noEmployees
    }

    async function addUser(data)  {
        console.log(data)
        const response = await fetch('api/addUser', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    userName: data,
                    balence:  "100",
                    userContactsIDs: [],
                    transactionsIDs: []
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
        getUser: getUser
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;