import { useState } from 'react'
import * as userService from '../../utilities/users-service'

export default function LoginForm({ setUser }) {
        const [credentials, setCredentials] = useState({
            email: '',
            password: ''
        })
        const [err, setErr] = useState('')
        function handleChange(evt) {
            setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
            setErr('')
        }

        async function handleSubmit(evt) {
            evt.preventDefault()
        try {
            const user = await userService.login(credentials)
            setUser(user)
        } catch (error) {
            setErr('Login Failed - Try Again')
        }
    }

    return (
        <div>
            <div className='form-container'>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type='text' name='email' value={credential.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type='text' name='password' value={credentials.password} onChange={handleChange} required />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <p className='err-message'>&nbsp;{err}</p>
        </div>
    )
}