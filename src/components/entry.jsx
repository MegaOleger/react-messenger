import { useState } from 'react'
import Login from '../components/login/login'
import Registration from '../components/registration/registration'

function Entry({ setLoggedIn }){
    const [registratting, setRegistratting] = useState(false);

    return(
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', background: '#0b0b0b', padding: 20
            }}>
            <div style={{
                display: 'flex', width: 'min(700px, 90%)', backgroundColor: '#1e1e1e', borderRadius: 12, 
                overflow: 'hidden', color: 'white', boxShadow: '0 6px 24px rgba(0,0,0,0.6)'
                }}>
                <div style={{
                    flex: '0 0 32%', backgroundColor: '#171717', padding: 20, display: 'flex', 
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12
                    }}>
                    <img style={{width: '70%', maxWidth: 120}} src="/image.png" alt='logo'/>
                    <p style={{fontSize: '1.4rem', margin: 0}}>Taynopis</p>
                </div>

                <div style={{flex: 1, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '100%', maxWidth: 360}}>
                        {!registratting && (
                            <Login setLoggedIn={setLoggedIn} setRegistratting={setRegistratting} />
                        )}
                        {registratting && (
                            <Registration setLoggedIn={setLoggedIn} setRegistratting={setRegistratting} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry;