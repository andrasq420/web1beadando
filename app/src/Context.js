import React, {createContext} from "react"


const FirstName = createContext();
const LastName = createContext();

const Name = () => {
    return (
        <>
        <FirstName.Provider value = {"Mohamed"}>
            <LastName.Provider value = {"Salah"}>
            </LastName.Provider>
        </FirstName.Provider>
        </>
    );
};

export default Name
export {FirstName,LastName}