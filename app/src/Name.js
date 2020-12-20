import React from "react";
import {FirstName , LastName} from "./Context"

const ComC = () => {
    return(
        <>
        <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h3>
                                        Gólkirály: {fname} {lname}
                                    </h3>
                                );
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
            </>
    )
}

export default ComC