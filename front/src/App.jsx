import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './views/Home/Home.jsx';
import MisTurnos from './views/Mis-Turnos/MisTurnos.jsx';

function App() {

  return (
    <>
      <NavBar/>
      {/*Home*/}
      <MisTurnos/>
    </>
  )
}

export default App
