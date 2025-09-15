// Example in App.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx'; // Import the Contact component


// Define your components for different pages
//const Home = () => <h2>Home Page</h2>;
//const About = () => <h2>About Page</h2>;
//const Contact = () => <h2>Contact Us</h2>;

function App() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
    
            {/* Define your routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      );
    }

export default App;