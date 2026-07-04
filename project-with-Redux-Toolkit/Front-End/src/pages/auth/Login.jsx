import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const loginHandler = () => {
    toast.success('User LoggedIn Successfully');
    navigate('/');

  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
        <input {...register('email')} className='w-auto outline-0 bg-zinc-950' type="email" placeholder='Enter your email' /> <br /> <br />
        <input {...register('password', { required: true })} className='w-auto outline-0 bg-zinc-950' type="password" placeholder='Enter your password' /> <br /> <br />
        {errors.password?.type == 'required' && <p className='text-red-500' role='alert'>password must be required to login</p>}
        <button style={{ padding: '8px 22px' }} type='submit' className='bg-blue-700 cursor-pointer rounded-xs'>Login user</button> <br /> <br />

        <Link to='/register'>Don't have an account ? <span className='text-red-600'>Register</span></Link>
      </form>
    </div>
  )
}

export default Login