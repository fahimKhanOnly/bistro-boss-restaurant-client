import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const Login = () => {
 const { signIn, userStatus } = useContext(AuthContext);
 const [btnStatus, setBtnStatus] = useState(true);
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

 useEffect(() => {
  loadCaptchaEnginge(6);
 }, [])
 useEffect(() => {
  userStatus && navigate("/");
 })
 const loginHandler = e => {
  e.preventDefault();
  const email = e.target.email.value;
  const pass = e.target.password.value;
  console.log(email, pass);

  signIn(email, pass)
   .then(result => {
    Swal.fire({
     title: 'User Login Successful.',
     showClass: {
      popup: 'animate__animated animate__fadeInDown'
     },
     hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
     }
    });
    navigate(from, {replace: true})
   })
 }

 const captchaHandler = (e) => {
  console.log(e.target.value);
  const user_captcha = e.target.value;
  if (validateCaptcha(user_captcha)) {
   console.log("Captcha matched.");
   setBtnStatus(false);
  }
  else {
   setBtnStatus(true);
  }
 }

 return (
  <div>
   <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
       Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
       quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     </div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={loginHandler} className="card-body">
       <div className="form-control">
        <label className="label">
         <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
       </div>
       <div className="form-control">
        <label className="label">
         <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

        <div>
         <LoadCanvasTemplate />

         <label>
          <input onBlur={captchaHandler} type="text" />
         </label>
        </div>
       </div>
       <div className="form-control mt-6">
        <button disabled={btnStatus} className="btn btn-primary">Login</button>
       </div>
      </form>

      <p><small>New Here? <Link className='btn btn-sm' to="/signUp">Create an account</Link></small></p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;