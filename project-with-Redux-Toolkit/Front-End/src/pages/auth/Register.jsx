import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../features/actions/UserAction';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
const Register = () => {
  const { register, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const registerHandler = (user) => {
    console.log('USER --> ', user);
    user.id = nanoid();
    dispatch(createUser(user));
    if (password === confirmPassword) {
      toast.success('User Registered successfully');
      navigate('/login');
    } else {
      toast.error('password should be same !');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(registerHandler)}>
        <input {...register('username')} className='w-auto outline-0 bg-zinc-950' type="text" placeholder='Enter your username' /> <br /> <br />
        <input {...register('email')} className='w-auto outline-0 bg-zinc-950' type="email" placeholder='Enter your email' /> <br /> <br />
        <input {...register('password')} className='w-auto outline-0 bg-zinc-950' type="password" placeholder='Enter your password' /> <br /> <br />
        <input {...register('confirmPassword')} className='w-auto outline-0 bg-zinc-950' type="password" placeholder='Enter your confirm paassword ' /> <br /> <br />
        <button style={{ padding: '8px 22px' }} type='submit' className='bg-emerald-700 cursor-pointer rounded-xs'>Register user</button> <br /><br />
        <Link to='/login'>already have an account ? <span className='text-red-600'>Login</span></Link>
      </form>
    </div>
  )
}

export default Register