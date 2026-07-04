import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Route from './routes/mainRoutes/Route.jsx';
import { store } from './features/store/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={Route}>
            <App />
        </RouterProvider>
        <Toaster />
    </Provider>

)
