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
          <div style={{backgroundColor: '#FBF6E2'}}>
            <div style={{display:'flex'}}>
              <form className='form' onSubmit={handleClick}>
                <h1>{name}</h1>
                <input id='email' type='Email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}/>
                <input id='Password' type='Password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button type='onSubmit'>{name}</button>
                  {name === "Login" ? <label onClick={SignInGoogle}>Google</label> : null}
                </div>
                  <label onClick={handleChangename} style={{textAlign:'center'}}>{otherName}</label>
              </form>
              <div style={{width: '300px'}}>
                <div className='logintextlogo'>
                  <h1 className='logo'>Gym</h1>
                  <h1 className='logo1'>Bro</h1>
                </div>
                <p className='Slogan'>"GymBro! - Jadikan Latihan Kebugaran sebagai Gaya Hidup."</p>
              </div>
            </div>
          </div>         
        </div>
        
    </>
    )

}


export default Login;