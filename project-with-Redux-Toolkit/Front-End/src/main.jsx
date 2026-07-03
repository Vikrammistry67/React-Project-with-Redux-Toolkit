import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Route from './routes/mainRoutes/Route.jsx';
createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={Route}>
            <App />
            <Toaster />
        </RouterProvider>
    </>
)
