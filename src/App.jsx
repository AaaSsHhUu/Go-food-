import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NavContextProvider from './context/NavContextProvider'
import { CartProvider } from './context/ContextReducer'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
      <NavContextProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
          <ToastContainer />
        </CartProvider>
        <Footer />
      </NavContextProvider>   
  )
}

export default App
