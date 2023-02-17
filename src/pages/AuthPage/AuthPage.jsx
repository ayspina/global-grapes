import { useState } from 'react';
import './AuthPage.css';
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
      <main className="AuthPage">
        <div>
          <img src="https://i.imgur.com/a6LPjie.png" alt="" className='logo-img' />
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </main>
    );
  }