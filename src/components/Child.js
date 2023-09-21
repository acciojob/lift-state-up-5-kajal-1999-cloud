import React  , {useState} from "react";


const Child = ({setIsLoggedIn}) => {

   function user(e){
    e.preventDefault()
    setIsLoggedIn(true)
   }
    return(
        <div>
            <form onSubmit={user} >
                <label htmlFor="name">UserName</label>
                <input type="text"/>
                <label htmlFor="pass">Password</label>
                <input type="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Child