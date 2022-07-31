
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Breakfast from './pages/Home/Breakfast';
import Lunch from './pages/Home/Lunch';
import Menu from './pages/Home/Menu';
import Banner from './pages/Home/Banner';
import Dinner from './pages/Home/Dinner';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path="/menu" element={<Menu />} >
          <Route index element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
