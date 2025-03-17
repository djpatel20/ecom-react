import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
import {App} from './App.jsx'
import { ToastContainer , Bounce } from 'react-toastify'
import { Provider } from 'react-redux'
import { reduxStore } from './Redux/reduxStore.js'
createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
    <App />
    <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
        
        
        />
  </Provider>,
)
