import React,{ useState,useEffect } from 'react';
const Gettings = () => {
    const [buttonClicked, setButtonClicked] = useState(false)
    const hanbleButtonClick = () =>{
        setButtonClicked(true)
    }
    return (
        <>
            <p>Bidyut Talukdar</p>
            {buttonClicked && <>Changed!</>}
            {!buttonClicked && <p>It's good to see you</p>}
            <button onClick={hanbleButtonClick}>Change Text!</button>
        </>
    )
}
export default Gettings