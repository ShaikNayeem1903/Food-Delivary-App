import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/Context.jsx'
import { Provider } from 'react-redux'
import store from './pages/store.js'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
  <UserContext>
      <App />
      <ToastContainer/>
  </UserContext>
  </Provider>
 
)
