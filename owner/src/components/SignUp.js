import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';

const Login = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        name: name,
        email: email,
        password: password,
        number: number
    }

    const sendData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/resturant/signup',data);
            console.log(response.data)
            navigate('/')    
        } catch (error) {
            console.log('Error fetching data:');
        }
        // console.log(data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        sendData()
    };

    return (
        <div className="login-page">
            <div className="login-container ">
                <h4 className='fs-2 text-center fw-bold text-secondary'>Register new Restaurant</h4>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Restaurant Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Mobile Number</label>
                        <input
                            type="number"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='btn btn-primary w-100 mt-2'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
