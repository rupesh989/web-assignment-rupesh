import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import logo from '../src/Images/Logo.svg';

function App() {
  return (

    <Router>
      <div className="App">
        <header>
          <nav>
          <img src={logo} alt="Company Logo" className="logo" /> 
            
            <ul className="nav-links">
              <li> <Link to="/">AboutUs</Link></li>
              <li><Link to="/contact">Contact</Link> </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<AboutUs />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
          </Routes>
        </main>

        <footer>
          <p>© 2022. PMEntire Pvt. Ltd. All rights are reserved.</p>
        </footer>


      </div>

    </Router>

  );
}

export default App;
