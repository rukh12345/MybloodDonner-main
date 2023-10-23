import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Records from './components/Records';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
const [user, setLoginUser] = useState({})


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/abt'element={<About/>}/>
      <Route path='/dnt'element={<Donate/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/cont'element={<Contact/>}/>
      <Route path='/pro'element={<Records/>}/>
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
