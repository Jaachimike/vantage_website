import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import Contact from './pages/contact/Contact';
import Movies from './pages/movies/Movies';
import Description from './pages/description/Description';

function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/description' element={<Description />} />
      </Routes>
      <Footer />


    </Router>

  </>

  );
}

export default App;
