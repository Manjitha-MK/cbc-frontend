import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
