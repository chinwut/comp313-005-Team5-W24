import React from 'react';
import Image from 'next/image';
import { K2D } from "next/font/google";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../hooks/firebase';
import { useToast } from '@chakra-ui/react';

const k2d = K2D({ weight: "800", subsets: ["latin"] })
const auth = getAuth(app);

const LoginForm = ({ onToggleForm }: any) => {
  const toast = useToast()
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/learning')
      setIsLoading(false)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        position: "top"
      })
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true)
    try {
      const result = await signInWithPopup(auth, provider)
      await GoogleAuthProvider.credentialFromResult(result)
      router.push('/learning')
      setIsLoading(false)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        position: "top"
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <p className="text-gray-700">Login to your account</p>
      <p className="text-gray-700">
        New here?
        <button type="button" onClick={onToggleForm} className="mx-1 text-sm text-blue-600 hover:text-blue-500 focus:text-blue-500 transition duration-300 ease-in-out">
          Sign up
        </button>
      </p>
      <form className="space-y-6 mt-4" onSubmit={handleLogin}>
        <div className="relative mb-4">
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 bg-white text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </span>
        </div>
        <div className="relative mb-4">
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 bg-white text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </span>
        </div>
        <button onClick={handleLogin} type="button" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:bg-blue-700 transition duration-300 ease-in-out" disabled={isLoading}>
          {isLoading ? (
            <svg className="animate-spin w-6 h-6 inline-block mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          )}
          Login
        </button>
      </form>
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-300">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <button onClick={handleGoogleLogin} type="button" className="w-full text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white transition duration-300 ease-in-out" disabled={isLoading}>
        {isLoading ? (
          <svg className="animate-spin w-6 h-6 inline-block mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4">
            <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" />
          </svg>)
        }
        Connect with Google
      </button>
    </>
  );
}

const RegisterForm = ({ onToggleForm }: any) => {

  const toast = useToast()
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async () => {
    setIsLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: displayName
      })
      router.push('/learning')
      setIsLoading(false)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        position: "top"
      })
      setIsLoading(false)
    }
  }

  return (<>
    <p className="text-gray-700">Register a new account</p>
    <p className="text-gray-700">
      Already got account?
      <button type="button" onClick={onToggleForm} className="mx-1 text-sm text-blue-600 hover:text-blue-500 focus:text-blue-500 transition duration-300 ease-in-out">
        Login
      </button>
    </p>
    <form className="space-y-6 mt-4" onSubmit={handleRegister}>
      <div className="relative mb-4">
        <input onChange={(e) => setDisplayName(e.target.value)} type="text" name="text" placeholder="Display Name" required className="w-full px-4 py-2 bg-white text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </span>
      </div>
      <div className="relative mb-4">
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 bg-white text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </span>
      </div>
      <div className="relative mb-4">
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 bg-white text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        </span>
      </div>
      <button onClick={handleRegister} type="button" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:bg-blue-700 transition duration-300 ease-in-out" disabled={isLoading}>
        {isLoading ? (
          <svg className="animate-spin w-6 h-6 inline-block mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        )}
        Register
      </button>
    </form>
  </>);
}

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">
      <div className="w-full lg:w-2/3 home-banner min-h-[600px]">
        <div className="absolute z-10">
          <h1 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mt-[100px] mx-10 text-6xl`}>Real-time ASL Fingerspelling Translator</h1>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mt-10 mx-10 text-xl`}>COMP313 Section 005 - Team 5</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Boonluea, Chinnawut</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Chung Ping MAK</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Emre YURDERI</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Geng Wei TU</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Ho Yin YIP</h2>
          <h2 className={`${k2d.className} text-white home-title font-bold max-w-[600px] mx-10 text-xl`}>Wing Ki MAK</h2>
        </div>
        <div className="home-banner-sofa"></div>
        <div className="home-banner-thumb-up hidden lg:block"></div>
        <div className="home-banner-light-blub"></div>
        <div className="home-banner-rocket"></div>
        <div className="home-banner-paper-plane"></div>
      </div>
      <div className="w-full lg:w-1/3 bg-white">
        <div className="p-8">
          <div className="text-center">
            <Image className="mx-auto max-w-full mt-[100px] mb-[60px]" src="/logo-full.png" alt="Logo" width={400} height={184} />
          </div>

          {isLogin ? <LoginForm onToggleForm={toggleForm} /> : <RegisterForm onToggleForm={toggleForm} />}

          <p className="text-gray-700 mt-10">
            By continuing you accept our
            <Link href="/terms-of-use" className="mx-1 text-sm text-blue-600 hover:text-blue-500 focus:text-blue-500 transition duration-300 ease-in-out">
              Terms of Use
            </Link>
            and
            <Link href="/privacy-policy" className="mx-1 text-sm text-blue-600 hover:text-blue-500 focus:text-blue-500 transition duration-300 ease-in-out">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
