import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import { FaGithubSquare } from "react-icons/fa";
import { FaGofore } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const { signIn,signInWithGoogle,signInWithGithub, setLoading } = useContext(AuthContext)
  const [error, setError] = useState('');

  const location = useLocation(); 
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';
  

  

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then( result => {
        const user = result.user;
      console.log(user);
      toast.success('Sussessfully complete')
      navigate('/')
    })
    .catch(error => console.error(error));
  }
  
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(result => {
        
        const user = result.user;
        toast.success('Sussessfully complete')
        navigate('/')
        console.log(user);
    })
    .catch(error => console.error(error));
  }


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    signIn(email, password)
        .then(result => {
            const user = result.user;
          setError('');

          form.reset();
          navigate(from, { replace: true })
          setLoading(false)

        

        })
        .catch(error => {
          console.error(error)
          setError(error.message);

        })
      .finally(() => {
        setLoading(false)
      
    })

  }






  return (
    <div>

<div className=" bg-base-200 py-12  px-4 pt-8">
  <div className=" ">
  
    <div className="card w-full sm:w-[60%] sm:mt-12 lg:w-[40%]  mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              


          
              
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
                  
                <Link to={'/register'}><span className=''>Creat a new account</span></Link>

            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <p className='text-red-500'>                {error}
</p>
        </div>
        <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
                
              </div>
              <div className=" flex justify-around items-center">
              <p className='flex justify-center items-center text-3xl font-bold text-[skyblue] text-center'>              <FaGofore onClick={handleGoogleSignIn}></FaGofore>
                
                </p>
                
                <p className='flex justify-center items-center text-3xl font-bold text-[#4da0c0] text-center'>              <FaGithubSquare onClick={handleGithubSignIn} ></FaGithubSquare>
                  
                  </p>
              </div>
            </form>
                    <ToastContainer />

    </div>
  </div>
</div>
    </div>
  )
}

export default Login