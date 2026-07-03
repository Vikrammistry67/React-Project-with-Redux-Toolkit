import { useEffect } from "react"
import { getUsers } from "./store/UserAction";
import Layout from "./components/Layout/Layout";
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getUsers()) }, []);
  return (
    <div>
      <Layout />
    </div>
  )
}

export default App