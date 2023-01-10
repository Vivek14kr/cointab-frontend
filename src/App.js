import logo from './logo.svg';
import './App.css';
import UserDetails from './components/User-Details';
import { Routes, Route } from "react-router-dom";
import Home from './components/buttons';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
