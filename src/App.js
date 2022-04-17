
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import LogIn from './Components/Auth/LogIn/LogIn';
import SignUp from './Components/Auth/SignUp/SignUp';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/HomePage/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='checkout' element={<RequireAuth>
          <CheckOut/>
        </RequireAuth> }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

