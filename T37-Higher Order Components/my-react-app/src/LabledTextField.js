import { Component } from "react";

function LabledTextField(NormalTextField,labelText){

    class finalTextField extends Component {
        render(){
            return(
                <>
                    <div>{labelText} </div>
                    <NormalTextField color="red" />
                </>
            )
        }


    }
    return finalTextField;
}
export default LabledTextField;