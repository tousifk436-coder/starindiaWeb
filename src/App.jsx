import React from 'react'
import Navbar from './components/common/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </>
  )
}

export default App
