import { useState } from "react";
import styles from './AuthPage.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import Logo from '../../components/Logo/Logo'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className={styles.AuthPage}>
            <div>
                <Logo />
            </div>
            <br/>
            <br/>
            <div>
                <SignUpForm />
                <div className={styles.divider}></div>
                <LoginForm />
            </div>
        </main>
    )
}