import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NavContextProvider from './context/NavContextProvider'

function App() {

  return (
      <NavContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </NavContextProvider>   
  )
}

export default App
