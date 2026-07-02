import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-around'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='about' >About</NavLink>
      <NavLink to='contact' >Contact</NavLink>
      <NavLink to='service' >Service</NavLink>
      <NavLink to='register' >Register</NavLink>
      <NavLink to='login' >Login</NavLink>
    </div>
  )
}

export default Navbar