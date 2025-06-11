import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './views/Home/Home.jsx';
import MisTurnos from './views/Mis-Turnos/MisTurnos.jsx';
import Register from './views/Register/Register.jsx';
import Login from './views/Login/Login.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/appointments' element={<MisTurnos/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
