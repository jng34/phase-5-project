import React from 'react';
import { useHistory } from 'react-router-dom';
import Joke from './Joke.js'


function Main() {
    let history = useHistory();

    return (
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="row">
                <div className="col">
                    <h1>Math is a Joke!</h1>
                </div>
                <div className="col">
                </div>
                <div style={{paddingTop:"20px", paddingBottom:"15px"}} className="col text-end">
                    <button className="btn btn-secondary">Log In</button>
                    {/* {user.name ? <></> : <button className="btn btn-success" onClick={() => history.push("/signup")}>Sign Up</button>} &nbsp;
                    {user.name ? <div><button className="btn btn-warning btn-small" onClick={()=>history.push("/profile")}>My Profile</button> &nbsp; <button className="btn btn-secondary" onClick={handleLogout}>Log Out</button></div>
                    : <button className="btn btn-secondary" onClick={() => history.push("/login")}>Log In</button>}
                    {user.name ? <p>Welcome, {user.name}! <br/></p> : <></>} */}
                </div>
            </div>
            <div className='align-self-center'>
                <Joke/>
            </div>
        </div>
    )
}


export default Main;