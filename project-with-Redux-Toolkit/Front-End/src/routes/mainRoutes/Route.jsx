import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Register from '../pages/User/Register';
import Login from '../pages/User/Login';
import CreateProduct from '../../pages/Product/CreateProduct';
import UpdateProduct from '../../pages/Product/UpdateProduct';
import ForgetUser from '../pages/User/ForgetUser';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import App from '../../App';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
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
            {
                path: '/service',
                element: <Service />
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