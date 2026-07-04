import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/navpages/About';
import Contact from '../../pages/navpages/Contact';
import Register from '../../pages/auth/Register';
import Login from '../../pages/auth/Login';
import CreateProduct from '../../pages/Product/CreateProduct';
import UpdateProduct from '../../pages/Product/UpdateProduct';
import ForgetUser from '../../pages/auth/ForgetUser';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import App from '../../App';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },


            // user routes -->
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forget-user',
                element: <ForgetUser />
            },


            // product - routes -->
            {
                path: '/createproduct',
                element: <CreateProduct />
            },
            {
                path: '/updateproduct',
                element: <UpdateProduct />
            },


            // Erro - routes -->
            {
                path: '/pagenotfound',
                element: <PageNotFound />
            },
        ]
    }
])

export default Route