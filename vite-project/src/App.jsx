import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import MovieInfo from "./components/MovieInfo"

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <div className=" min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/movie/:omdbId" element={<MovieDetails/>}/>
        <Route path="/movieInfo" element={<MovieInfo/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
