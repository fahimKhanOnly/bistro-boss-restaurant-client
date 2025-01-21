import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthContext";
import { useNavigate } from "react-router-dom";


const Register = () => {
 const navigate = useNavigate();
 const {createUser, userStatus} = useContext(AuthContext);
 const { register, handleSubmit, formState: { errors }, } = useForm()

 useEffect(() => {
  userStatus && navigate("/");
 }, []);
 const onSubmit = (data) => {
  createUser(data.email, data.password)
  .then(result => {
   console.log(result.user);
   result.user && navigate("/");
  })
 }

 return (
  <div>
   <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
       Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
       quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     </div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
       <div className="form-control">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input {...register("name", { required: true })} type="text" name="name" placeholder="email" className="input input-bordered" />
        {errors.name && <span className="text-red-500">This field is required</span>}
       </div>
       <div className="form-control">
        <label className="label">
         <span className="label-text">Email</span>
        </label>
        <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
        {errors.email && <span className="text-red-500">This field is required</span>}
       </div>
       <div className="form-control">
        <label className="label">
         <span className="label-text">Password</span>
        </label>
        <input {...register("password", { required: true, minLength: 4, maxLength: 12 , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,12}$/})} type="password" name="password" placeholder="password" className="input input-bordered" />
        {errors.password && <span className="text-red-500">This field is required</span>}
        {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at least 4 characters</span>}
       </div>

       <div className="form-control mt-6">
        <button className="btn btn-primary">Sign Up</button>
       </div>  
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Register;