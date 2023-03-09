import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Appeals from './components/Appeals';
import Services from './components/Services';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/appeals' element={<Appeals />} />
          <Route path='/services' element={<Services />} />
          <Route path="*" element={<NoPage />} />

        </Routes>

        <Outlet />
        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
