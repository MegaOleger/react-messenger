import { useState } from 'react'
import './App.css'
import Welcome from './components/welcome';
import Home from './components/home'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <Home />
  ) : (
    <Welcome setLoggedIn={setLoggedIn} />
  );
}

export default App
