import { useState } from 'react'
import './login.css'


function Login({setLoggedIn, setRegistratting}){    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    return(
        <form action="/login" method="post" name="login" style={{display: 'flex', flexDirection: 'column', gap: '1px', width: '100%'}} >
            <p style={{textAlign: 'center', marginBottom: 3, marginTop: 0}}>Login</p>
            <input 
                type="text" 
                className="input_log" 
                name="user_login" 
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required 
            />
            <div className="message"><p>message_login</p></div>
            <p style={{textAlign: 'center', marginBottom: 3, marginTop: 0}}>Password</p>
            <input 
                type="password" 
                className="input_log" 
                name="password" 
                minLength={5} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <a href=""><p className="forgot">Forgot your password?</p></a>
            <div className="message"><p>message_password</p></div>
            <button className="btn_login" type="submit">Sign in</button>
            <button className="reg" type="button" onClick={() => setRegistratting(true)}>Registration</button>
        </form>    
    )
}

export default Login;