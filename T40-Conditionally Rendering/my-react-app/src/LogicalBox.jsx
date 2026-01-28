const LogicalBox =({isLogged})=>{
    return (
        <div className="box">
            <h3> Logical AND Box</h3>
            <hr/>
            {isLogged && <h3>Welcome user!</h3>}
            {!isLogged && <h3>Please log in.</h3>}
        </div>
    )
}
export default LogicalBox;