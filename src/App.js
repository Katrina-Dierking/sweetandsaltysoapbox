
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Store from './views/store/Store';
import University from './views/university/University';
import Contact from './views/contact/Contact';
import About from './views/about/About';

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route path="/store" element={<Store />} />
           <Route path="/university" element={<University />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
