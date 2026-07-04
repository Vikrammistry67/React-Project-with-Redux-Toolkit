import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
// import { getUsers } from "./features/actions/UserAction";
// import { useDispatch } from 'react-redux';
// import { getProduct } from "./features/actions/ProductAction";
// import { getCart } from "./features/actions/CartAction";
const App = () => {
  // const dispath = useDispatch();
  useEffect(() => {
    // dispath(getUsers());
    // dispath(getProduct());
    // dispath(getCart());
  }, []);
  return (
    <div>
      <Layout />
    </div>
  )
}

export default App