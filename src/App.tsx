import './App.css'
import Home from './Rutas/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import {Route,Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <body>
            <header ><Header/></header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Agregar-Post'/>
        <Route path='/Eliminar-Post'/>
        <Route path='/Calculadora'/>
      </Routes>
            <footer><Footer/></footer>
      </body> 
    </div>
  )
}

export default App
