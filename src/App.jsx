import { useState } from 'react'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Page/Dashboard/Dashbord'
import './App.css'

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
     <Header STATE={{isMenuOpen, setisMenuOpen}}/>
     <Sidebar STATE={{isMenuOpen, setisMenuOpen}}/>
     <Dashboard STATE={{isMenuOpen, setisMenuOpen}}/>
    </>
  )
}

export default App
