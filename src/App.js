import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />

      </Routes>
      <Footer />


    </Router>

  </>

  );
}

export default App;
