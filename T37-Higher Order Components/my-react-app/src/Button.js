import React from 'react';
const Button =({text, clickTrigger}) => {


    const mouseClick=(e)=>{
        if (clickTrigger){
            clickTrigger();
        }else{
           console.log("No clickTrigger Found"); 
        }
       
    }

    const mouseHover =()=>{
        clickTrigger();
    }

    return (
        <div>  
            <button onClick={mouseClick} onMouseOver={mouseHover}>{text}</button>
        </div>
    );
}
export default Button;