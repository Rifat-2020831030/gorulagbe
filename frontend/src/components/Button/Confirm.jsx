import React from "react";

const Confirm = (id) => {
    const submitForm = () =>{
        document.getElementById({id}).submit();
    }
        return(
                <button onClick={submitForm}>Confirm</button>
        )
    }
    


export default Confirm;