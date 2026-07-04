import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-around'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='about' >About</NavLink>
      <NavLink to='contact' >Contact</NavLink>
      <NavLink to='register' >Register</NavLink>
      <NavLink to='login' >Login</NavLink>
      <NavLink to='forget-user'>ForgetPassword</NavLink>
    </div>
  )
}

export default Navbar