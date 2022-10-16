import React from 'react';

export const Selfie = ()=> {

    const saveSelfie = () => {
        alert("save")    
    }
    return(
    <div>
        <button onClick={()=>saveSelfie()}>Save</button>
</div>
    )
}
