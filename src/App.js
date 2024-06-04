import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Counter from './components/Counter/Counter';


function App() {
  return <div className="container">
    <BrowserRouter>
    <nav>
      <NavLink to="/">Pocetna </NavLink>
      <NavLink to="/about">O nama</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      <NavLink to="/counter">Counter</NavLink>

    </nav>
    <main className='App'>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path= '/about' element= {<About/>}/>
    <Route path='/counter' element={<Counter/>} />
  </Routes>
  </main>
  </BrowserRouter>
  </div>;
  
}

export default App;
