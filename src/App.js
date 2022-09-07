
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
import BreakfastDetail from './pages/Detail/BreakfastDetail';
import Order from './pages/Order/Orders';
import LunchDetail from './pages/Detail/LunchDetail';
import DinnerDetail from './pages/Detail/DinnerDetail';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './pages/Authentication/RequireAuth';
import PlaceOrder from './pages/Order/PlaceOrder';
import Payment from './pages/Order/Payment';
import Dashboard from './pages/Dasboard/Dashboard';
import MyOrder from './pages/Dasboard/MyOrder';


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
        <Route path='/breakfastDetail/:id' element={
          <RequireAuth>
            <BreakfastDetail />
          </RequireAuth>
        }></Route>
        <Route path='/lunchDetail/:id' element={<RequireAuth>
          < LunchDetail />
        </RequireAuth>}></Route>
        <Route path='/dinnerDetail/:id' element={
          <RequireAuth>
            < DinnerDetail />
          </RequireAuth>
        }></Route>
        <Route path='/placeOrder/:id' element={
          <RequireAuth>
            < PlaceOrder />
          </RequireAuth>
        }></Route>
        <Route path='/payment/:id' element={
          <RequireAuth>
            < Payment />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/myOrder' element={<Order />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrder />}></Route>
        </Route>

        <Route path='*' element={<NotMatch />}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
