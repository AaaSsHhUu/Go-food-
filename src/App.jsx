import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NavContextProvider from './context/NavContextProvider'
import { CartProvider } from './context/ContextReducer'; 


function App() {

  return (
      <NavContextProvider>
        <Navbar />
        <CartProvider>
          <Outlet />
        </CartProvider>
        <Footer />
      </NavContextProvider>   
  )
}

export default App
