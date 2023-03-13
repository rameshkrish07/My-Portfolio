import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './pages/Home';
import HeaderComponent from './components/Header';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
