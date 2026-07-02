import Navbar from '../NavbarComponent/Navbar';
import Logo from '../NavbarComponent/Logo';
const Container = () => {
  return (
    <div style={{ padding: '0 20px' }} className='w-screen h-full flex items-center justify-between'>
      <div className='w-[10vw]'><Logo /></div>
      <div className='w-[70vw]'><Navbar /></div>
    </div>
  )
}

export default Container