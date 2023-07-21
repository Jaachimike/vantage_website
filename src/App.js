import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />

      </Routes>
      <Footer />


    </BrowserRouter>

  </>

  );
}

export default App;
