const IfBox = ({isLogged})=>{
    if(isLogged){
        return (
            <div className="box">
                <h3> If Box</h3>
                <hr/>
                <h3>Welcome user!</h3>
            </div>
        )
    }else{
        return (
            <div className="box">
                <h3> If Box</h3>
                <hr/>
                <h3>Please log in.</h3>
            </div>
        )
    }
};
export default IfBox;