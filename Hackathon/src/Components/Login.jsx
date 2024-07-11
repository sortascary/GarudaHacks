import React from 'react'

function Login() {

    return (
    <>
        <div>
            <h1>Login</h1>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor='email'>Email: </label>
                <input id='email' type='Email'/>
                <label htmlFor='Password'>Password: </label>
                <input id='Password' type='Password'/>
            </form>
        </div>
    </>
    )

}


export default Login;