import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import Header from "./components/Header"


function App() {
  return (
    <BrowserRouter>
    <Header/>
   
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/auth" element={<Auth/>}/> 
      <Route path="/profile" element={<Profile/>}/> 

      </Routes>
   
    </BrowserRouter>
      
 
  )
}

export default App
