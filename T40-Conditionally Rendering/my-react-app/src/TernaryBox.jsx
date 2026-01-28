const TernaryBox =({isLogged})=>{
    return (
        <div className="box">
            <h3> Ternary Box</h3>
            <hr/>
            <h3>{isLogged ? <h3>Welcome user!</h3> : <h3>Please log in.</h3>}</h3>
        </div>
    )
}
export default TernaryBox;