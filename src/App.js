import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './pages/Home';
import WorkComponent from './pages/Work';
import HeaderComponent from './components/Header';
import NavbarComponent from './components/Navbar';
import FooterComponent from './pages/footer';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <HomeComponent />
      <WorkComponent />

      <FooterComponent />
    </div>
  );
}

export default App;
