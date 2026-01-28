const FunctionBox = ({isLogged})=>{
    // const  checkStatus = () => {
    //     if(isLogged){
    //         return <h3>Welcome user!</h3>
    //     }else{
    //         return <h3>Please log in.</h3>
    //     }
    // }

    return (
        <div className="box">
            <h3> Function Box</h3>
            <hr/>
            {/*checkStatus()*/}

            {(()=>{
                if(isLogged){
                    return <h3>Welcome user!</h3>
                }else{
                    return <h3>Please log in.</h3>
                }
            })()}
        </div>  
    )
}
export default FunctionBox;