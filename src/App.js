import './App.scss'
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <Routers>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Routers>
  );
}

export default App;
