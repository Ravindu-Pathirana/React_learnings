const SwitchBox=({isLogged})=>{
    let content;
    switch(isLogged){
        case true:
            content = <h3>Welcome user!</h3>;
            break;
        case false:
            content = <h3>Please log in.</h3>;
            break;
        default:
            content = <h3>Error!</h3>;
    }
    return (
        <div className="box">
            <h3> Switch Box</h3>
            <hr/>
            {content}
        </div>
    )
};
export default SwitchBox;