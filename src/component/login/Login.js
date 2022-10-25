import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'

const Login = () => {

  const { signIn } = useContext(AuthContext)
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/'
  
   const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    signIn(email, password)
        .then(result => {
            const user = result.user;
          console.log('sign user', user);
          form.reset();
          navigate(from, {replace: true})

        })
        .catch(error => {
            console.error(error)
        })

  }



  return (
    <div>

<div className=" bg-base-200 h-[100vh]   px-4 pt-8">
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login