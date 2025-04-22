import React from "react"; // this is responsible to parse the JSX code
import { NavLink } from "react-router-dom";

let Header = (props)=>{
    let user = props.user; //reading from mapStateToProps which reads from userReducer.user
    console.log(user)
    
    const usrName = user && user.userName ? user.userName : "";

    return(
        <>
            {usrName !=""?
            <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>:
            <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
                <h3>Please click on login button to proceed to login.</h3>
            </h2>
        }   
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
            </div>
        </>
    )
}

export default Header;