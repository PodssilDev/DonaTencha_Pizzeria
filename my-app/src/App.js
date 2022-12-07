import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<HomeComponent />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
