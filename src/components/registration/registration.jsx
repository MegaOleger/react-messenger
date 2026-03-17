import { useState } from 'react'
import './registration.css'


function Registration({setLoggedIn, setRegistratting}){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [regLogin, setRegLogin] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [bday, setBday] = useState('');
    const [gender, setGender] = useState('');

    return(
        <form action="/registration" method="post" name="reg" style={{display: 'flex', flexDirection: 'column', gap: 12, background: 'transparent'}}>
            {/* Row 1: Name and Surname */}
            <div style={{display: 'flex', gap: 12}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <p className="txt_box">Name</p>
                    <input 
                        type="text" 
                        name="reg_name" 
                        className="input"
                        maxLength={15}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='name'
                        required 
                        />
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <p className="txt_box">Surname</p>
                    <input 
                        type="text" 
                        name="reg_lastname" 
                        className="input"
                        maxLength={15}
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder='surname'
                        required />
                </div>
            </div>

            {/* Row 2: Login and Password */}
            <div style={{display: 'flex', gap: 12}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <p className="txt_box">Login</p>
                    <input 
                        type="text"
                        name="reg_login" 
                        className="input"
                        minLength={20}
                        value={regLogin}
                        onChange={(e) => setRegLogin(e.target.value)}
                        placeholder='login'
                        required />
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <p className="txt_box">Password</p>
                    <input 
                        type="password" 
                        name="reg_password" 
                        className="input"
                        minLength={25}
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder='password'
                        required />
                </div>
            </div>

            {/* Row 3: Date of birth and Gender */}
            <div style={{display: 'flex', gap: 12}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <label className="txt_box" style={{userSelect: 'none', marginBottom: 0}}>Date of birth</label>
                    <input 
                        className="date input" 
                        type="date" 
                        id="bday" 
                        name="bday" 
                        value={bday} 
                        onChange={(e) => setBday(e.target.value)}
                        style={{fontSize: 15}}
                        required 
                    />
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                    <label className="txt_box" style={{userSelect: 'none', marginBottom: 0}}>Gender</label>
                    <select 
                        name="gender" 
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)} 
                        required
                        style={{
                            padding: '8px 12px', fontSize: '15px', borderRadius: '0.5rem', border: '1px solid #0f0f0f', 
                            backgroundColor: '#2a2a2a', color: '#e6e6e6', cursor: 'pointer', height: '32px'}}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            <button className="btn_reg" type="submit">Sign up</button>
            <button className="log" type="button" onClick={() => setRegistratting(false)}>Back to login</button>
        </form>
    )
}

export default Registration;