import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-1/2 hidden sm:block h-full bg-gradient-to-br from-lightBlue-100 to-lightBlue-200 flex items-center justify-center overflow-hidden">
                <img
                    src="https://i.pinimg.com/236x/ab/9f/d6/ab9fd6ff0732d355baf151d3346bb3a8.jpg"
                    alt="Login Visual"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-1/2 md:w-full lg:w-1/2 flex items-center justify-center bg-lightBlue-50">
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                            <div className="max-w-md mx-auto">
                                <div>
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo"
                                        className="w-auto h-auto"
                                    />
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" value={username}
                                                onChange={(e) => setUsername(e.target.value)} />
                                            <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                        </div>
                                        <div className="relative">
                                            <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <button
                                            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold shadow-lg duration-500 mt-8"
                                            onClick={handleLogin}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

