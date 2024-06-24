import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './compoments/header/Header'
import Footer from './compoments/footer/Footer'
import './App.css'
import Login from './pages/login/Login'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
