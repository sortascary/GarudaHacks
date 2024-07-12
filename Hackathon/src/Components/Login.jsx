import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth, GoogleProvider } from '../Config/Firebase';


function Login() {
const [name, setName] = useState('Login');
const [otherName, setOtherName] = useState('SignUp');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleChangename = () => {
  if (name === "Login") {
    setName('Signup');
    setOtherName('Login');
  } else {
    setName('Login');
    setOtherName('SignUp');
  }
}

useEffect(() => {
    if (auth?.currentUser) {
      navigate('/Sidebar'); 
    }
  }, [auth?.currentUser, navigate]);


const SignInGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      navigate('/Sidebar');
    } catch (err) {
      console.error(err);
    }
  }

const LoginEmail = async () =>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
}

const CreateEmail = async () =>{
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created successfully');
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully');
    navigate('/Sidebar');
  } catch (err) {
    console.error(err);
  }

}

const handleClick = (e) => {
  e.preventDefault();
  if (name == "Login") {
    LoginEmail();
  } else{
    CreateEmail();
  }
}

    return (
    <>
        <div className='LogInPage'>
          <div >
            <h1>{name}</h1>
            <form className='form' onSubmit={handleClick}>
                <label htmlFor='email'>Email: </label>
                <input id='email' type='Email' onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='Password'>Password: </label>
                <input id='Password' type='Password' onChange={(e) => setPassword(e.target.value)}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button type='onSubmit'>{name}</button>
                  {name === "Login" ? <label onClick={SignInGoogle}>Google</label> : null}
                </div>
                
            </form>
            <button type='button' onClick={handleChangename}>{otherName}</button>
          </div>
        </div>
    </>
    )

}


export default Login;