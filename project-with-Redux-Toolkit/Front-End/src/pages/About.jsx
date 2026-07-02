import { useEffect } from "react";
import axios from '../config/axiosConfig.js';

const About = () => {
  const getProducts = async () => {
    const data = await axios.get('/users');
    console.log(data.data[0].username);
  };

  useEffect(() => { getProducts() }, []);
  return (
    <div>About</div>
  )
}

export default About