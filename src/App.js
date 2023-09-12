
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Store from './views/store/Store';
import University from './views/university/University';
import Contact from './views/contact/Contact';
import About from './views/about/About';
import Blog from './views/blog/Blog';
import {
  Bubble,
  Desserts,
  Gifts,
  Her,
  Him,
  Salts,
  Snarky,
  Embeds,
  Soap, 
  BathProducts
} from "./views/store/index"
import Login from './components/loginReg/Login';
import Reg from './components/loginReg/Reg';
import Dashboard from './views/university/Dashboard';


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
           <Route path="/blog" element={<Blog />} />
           <Route path="/desserts" element={<Desserts />} />
           <Route path="/bubble" element={<Bubble />} />
           <Route path="/gifts" element={<Gifts />} />
           <Route path="/her" element={<Her />} />
           <Route path="/him" element={<Him />} />
           <Route path="/salts" element={<Salts />} />
           <Route path="/snarky" element={<Snarky />} />
           <Route path="/login" element={<Login />}/>
           <Route path="/register" element={<Reg />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/soap" element={<Soap />} />
           <Route path="/embeds" element={<Embeds />} />
           <Route path="/bathproducts" element={<BathProducts />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
