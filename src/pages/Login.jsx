// import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://dummyjson.com/auth/login',
            {username,password},
        ).then((response) => {
            console.log(response);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            if (response.status === 200) {
                navigate('/home');
                setErrorMessage('');
                window.location.reload();
            }
        }).catch ((error) => {
            console.log(error);
            setErrorMessage('Invalid username or password');
        });    
    };

    // useEffect (() => {
    //     const onSubmit = async (e) => {
    //         e.preventDefault();
    //         await axios.post('https://dummyjson.com/auth/login',
    //             {username,password},
    //         ).then((response) => {
    //             console.log(response);
    //             localStorage.setItem('userInfo', JSON.stringify(response.data));
    //             if (response.status === 200) {
    //                 console.log('Login Success');
    //                 navigate('/home');
    //                 setErrorMessage('');
    //             }
    //         }).catch ((error) => {
    //             console.log(error);
    //             setErrorMessage('Invalid username or password');
    //         });    
    //     }; 
    //     onSubmit();
        
    // }, [username, password, navigate]);
    
    return (
        <div className="flex w-full h-auto items-center justify-center bg-white">
            <div className="hidden md:inline-block w-1/2 object-cover overflow-hidden">
                {/* <img src="/login-page.jpg" alt="Login Page Image" className="w-full" /> */}
                <video playsInline autoPlay muted loop className="w-full h-full" 
                src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"/>
            </div>
            <div className="lg:w-1/2" >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-bold mb-8 text-center">Sign in to Dribbble</h2>
                            <button className="w-full flex items-center justify-center bg-white text-black border py-3 px-4 rounded-full gap-3 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" className="icon ">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
                            </svg>
                                Sign in with Google
                            </button>
                            <div className="relative my-4">
                                <div className="absolute top-1/2 w-full -inset-0 -z-10">
                                    <hr className="text-slate-900" />
                                </div>
                                <div className="z-10"><p className="text-center text-sm text-slate-500">or sign in with email</p></div>
                            </div>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="username">
                                        Username or Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        aria-required="true"
                                        value={username}
                                        placeholder="Username or Email"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between">
                                    <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <a
                                        className="inline-block align-baseline underline text-sm text-slate-700"
                                        href="#"
                                        title="Click here to reset your password"
                                    >
                                        Forgot?
                                    </a></div>
                                    <input
                                        className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        aria-required="true"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                                <div className="flex-col items-center justify-center bg-white text-black py-3 px-4 rounded-full gap-3 mb-4">
                                    <button className="w-full bg-slate-900 hover:bg-slate-700 text-white py-3 px-4 rounded-full font-bold focus:outline-none focus:shadow-outline"
                                    onClick={onSubmit}>
                                        Sign In
                                    </button>
                                </div>
                                <div className="text-center text-slate-500 text-sm">
                                    Don&apos;t have an account? <a href="/register" className="text-slate-900">Sign up</a>   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;