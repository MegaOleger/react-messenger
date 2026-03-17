import { useState } from 'react'
import Entry from './entry'

function Welcome({ setLoggedIn }){
    const [logging, setLogging] = useState(false);

    if (!logging){
        return (
            <>
                <div style={{
                    background: '#0b0b0b', minHeight: '100vh', 
                    color: '#e6e6e6', display: 'flex', flexDirection: 'column'
                }}>
                    <header style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                            padding: '20px 40px', borderBottom: '1px solid #1f1f1f', background: 'transparent'
                            }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                            <img style={{width: 40, height: 40}} src='/image.png' alt='logo'/>
                            <div style={{fontWeight: 700, fontSize: 20, color: '#f5f5f5'}}>Taynopis</div>
                        </div>
                        <button onClick={() => setLogging(true)} style={{
                            padding: '10px 18px', borderRadius: 8, border: '1px solid #2a2a2a', 
                            background: '#1b1b1b', color: '#e6e6e6', fontSize: 14
                            }}>Войти
                        </button>
                    </header>

                    <main style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <img style={{width: 140, height: 140, objectFit: 'contain', marginBottom: 24}} src='/image.png' alt='logo-large'/>
                            <h1 style={{fontSize: 40, margin: '0 0 12px', color: '#ffffff'}}>Добро пожаловать в Taynopis</h1>
                            <p style={{color: '#cfcfcf', maxWidth: 800, marginTop: 0, fontSize: 16}}>
                                Taynopis — это современный мессенджер, который позволяет вам общаться с друзьями и коллегами в реальном времени.
                                Нацелиный на безопасность и удобство. 
                            </p>

                            <div style={{marginTop: 40, width: '100%', display: 'flex', gap: 20, justifyContent: 'center', maxWidth: 1000}}>
                                <div style={{flex: 1, background: '#0f0f0f', border: '1px solid #1f1f1f', padding: 24, borderRadius: 10}}>
                                    <h3 style={{margin: '0 0 12px', color: '#f0f0f0', fontSize: 16}}>Что уже реализовано</h3>
                                    <ul style={{color: '#d9d9d9', margin: 0, paddingLeft: 24, textAlign: 'left'}}>
                                        <li>Личные чаты</li>
                                        <li>Групповые чаты</li>
                                    </ul>
                                </div>

                                <div style={{flex: 1, background: '#0f0f0f', border: '1px solid #1f1f1f', padding: 24, borderRadius: 10}}>
                                    <h3 style={{margin: '0 0 12px', color: '#f0f0f0', fontSize: 16}}>Планируемые функции</h3>
                                    <ul style={{color: '#d9d9d9', margin: 0, paddingLeft: 24, textAlign: 'left'}}>
                                        <li>Голосовые сообщения</li>
                                        <li>Звонки</li>
                                        <li>Отправка файлов и изображений</li>
                                        <li>Каналы</li>
                                        <li>Эмодзи и стикеры</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer style={{textAlign: 'center', padding: '20px 40px', color: '#9b9b9b', fontSize: 13}}>
                        <div style={{marginBottom: 6}}>Проект в разработке — функции появляются постепенно.</div>
                        <a href='https://github.com/MegaOleger' target='_blank' rel='noopener noreferrer' style={{color: '#7fa2ff', textDecoration: 'none'}}>MegaOleger</a>
                    </footer>
                </div>
            </>
        )
    }
    else{
        return(
            <Entry setLoggedIn={setLoggedIn}/>
        )
    }
}

export default Welcome;