import React from 'react';
const Button =({text, clickTrigger, hoverTrigger}) => {


    const mouseClick=(e)=>{
        if (clickTrigger){
            clickTrigger();
        }else{
           console.log("No clickTrigger Found"); 
        }
       
    }

    const mouseHover =()=>{
        if (hoverTrigger){
            hoverTrigger();
        }else{
           console.log("No hoverTrigger Found"); 
        }
    }

    return (
        <div>  
            <button onClick={mouseClick} onMouseOver={mouseHover}>{text}</button>
        </div>
    );
}
export default Button;