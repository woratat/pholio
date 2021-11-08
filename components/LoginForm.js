import React from 'react';
import { database } from './firebase';

function LoginForm() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleLogin = () => {
        database.auth().signInWithEmailAndPassword(email, password).catch(error => {
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                setEmailError(error.message);
                break;
                case "auth/wrong-password":
                setPasswordError(error.message);
                break;

            }
        })
    }

    const handleSignUp

    return (
        <div>
            
        </div>
}

export default LoginForm
