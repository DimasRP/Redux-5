import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
