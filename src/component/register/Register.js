import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'
import { FaGofore } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const { createUser, signInWithGoogle,updateUserProfile, verifyEmail } = useContext(AuthContext);

  const navigate = useNavigate()
  const [error, setError] = useState('');


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
        .then(result => {
            const user = result.user;
          console.log('registered user', user);
          setError('');
          form.reset();

          navigate('/')
          handleUpdateUserProfile(name);
          handleEmailVerification();
          toast.success('Please verify your email address.')
          
        })
        .catch(error => {
          console.error(error)
          setError(error.message);

        })

  }
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then( result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error));
  }
  
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}

const handleEmailVerification  = () => {
    verifyEmail()
    .then(() =>{})
    .catch(error => console.error(error));
}


  return (
    <div>
<div className=" bg-base-200 h-[100vh]   px-4 pt-8">
  <div className=" ">
  
    <div className="card w-full sm:w-[60%] sm:mt-12 lg:w-[40%] mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              


            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
              
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to={'/login'}><span className=''>Already have an account</span></Link>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <p className='text-red-500'>                {error}
</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
              </div>
              <p className='flex justify-center items-center text-3xl font-bold text-[skyblue] text-center'>              <FaGofore onClick={handleGoogleSignIn}></FaGofore>
</p>
            </form>
            <ToastContainer />

    </div>
  </div>
</div>
    </div>
  )
}

export default Register