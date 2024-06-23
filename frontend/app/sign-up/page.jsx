"use client";
import { useState } from 'react';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle signup functionality here
        console.log('Signing up...');
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                h1 {
                    margin-bottom: 1rem;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                label {
                    font-weight: bold;
                }

                input {
                    padding: 0.5rem;
                }

                button {
                    padding: 0.5rem 1rem;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default SignUpPage;
