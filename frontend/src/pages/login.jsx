import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const Login = ({ onSwitchToSignup }) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`${backendURL}/user/login`, {
            ...formData
        }).then(response => {
            setIsLoading(false);
            localStorage.setItem('token', response.data.token);
            toast.success("Login Successful");
            navigate('/dashboard');
        }).catch(error => {
            setIsLoading(false);
            console.error('Error:', error.message);
            toast.error(error.response.data.message);
        });

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg">
                            <Brain className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600">Sign in to your AI Study account</p>
                </div>


                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Forgot password?
                            </button>
                        </div>


                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {isLoading ? <ClipLoader color="#6C63FF" loading={true} size={23} /> : "Sign In"}

                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to={'/signup'}>
                                <button
                                    onClick={onSwitchToSignup}
                                    className="text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    Sign up
                                </button>
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;