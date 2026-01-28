const ClassBox = ({isLogged}) =>{
    return (
        <div className="box">
            <h3> Class Box</h3>
            <hr/>
            <button className={isLogged ? "logout" : "login"}>{isLogged ? "Logout" : "Login"}</button>
        </div>
    )
};
export default ClassBox;