import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"


function App() {
  return (
    <BrowserRouter>
   
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
