import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import CeateListing from "./pages/CeateListing"


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth login />} />

        <Route element={<PrivateRoute />}>

          <Route path="/profile" element={<Profile />} />
          <Route path="create-listing" element={<CeateListing />} />

        </Route>


      </Routes>

    </BrowserRouter>


  )
}

export default App
