import React from 'react'
import Navbar from './components/common/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'
import CustomCursor from './components/common/CustomCursor'

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App
