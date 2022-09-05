// import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Register from './pages/Register';
import Login from './pages/Login';
import ClassLogin from './pages/ClassLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/classlogin' element={<ClassLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
