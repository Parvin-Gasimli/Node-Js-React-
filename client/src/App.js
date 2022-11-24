import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/login' element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
