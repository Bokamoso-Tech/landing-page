import { Route, Routes } from 'react-router-dom'
import AppNavbar from './components/app-navbar'
import LandingPage from './pages/LandingPage'
import Footer from './components/footer'

function App() {  

  return (
    <>
      <AppNavbar />

      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>  
      </main>

      <Footer />
    </>
  )
}

export default App
