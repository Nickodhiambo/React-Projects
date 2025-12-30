// import './App.css'
import NavBar from './components/navbar'
import ScrollToSection from './components/scroll-to-section'
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom'
// import TicTacToe from './components/tic-tac-toe'
import TicTacToe from './components/tic-tac-toe-1'
import TestUseFetch from './components/use-fetch/test'
import UseOnClickOutsideTest from './components/useOnClickOutside/test'
import UseWindowResizeTest from './components/useWindowResize/test'
import WeatherApp from './components/weather-app'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'

function App() {


  return (
    <>
      {/* Tic Tac Toe component */}
      {/* <TicTacToe /> */}
      {/* Custom hooks */}
      {/* < TestUseFetch/> */}
      {/* <TestUseFetch /> */}
      {/* <UseOnClickOutsideTest /> */}
      {/* <UseWindowResizeTest/> */}
      {/* < ScrollToTopAndBottom/> */}
      {/* <ScrollToSection/> */}
      {/* <WeatherApp/> */}
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg ">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>

        </Routes>
      </div>
    </>

  )
}

export default App
