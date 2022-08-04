
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Breakfast from './pages/Home/Breakfast';
import Lunch from './pages/Home/Lunch';
import Dinner from './pages/Home/Dinner';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import NotMatch from './pages/Shared/NotMatch';
import Menu from './pages/Home/Menu';
import Detail from './pages/Home/Detail';
import Order from './pages/Order/Order';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path="/menu" element={<Menu />} >
          <Route index element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/myOrder' element={<Order />}></Route>
        <Route path='*' element={<NotMatch />}></Route>

      </Routes>
    </div>
  );
}

export default App;
