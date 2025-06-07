import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './views/Home/Home.jsx';
import MisTurnos from './views/Mis-Turnos/MisTurnos.jsx';
import Register from './views/Register/Register.jsx';
import Login from './views/Login/Login.jsx';


function App() {

  return (
    <>
      <NavBar/>
      {/*Home*/}
      {<MisTurnos/>}
      {/*<Register/>*/}
      {/*<Login/>*/}
    </>
  )
}

export default App
