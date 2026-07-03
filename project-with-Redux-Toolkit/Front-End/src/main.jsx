import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Route from './routes/Route.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <RouterProvider router={Route}>
                <App />
                <Toaster />
            </RouterProvider>
        </Provider>
    </>
)
