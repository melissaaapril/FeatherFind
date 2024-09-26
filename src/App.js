
import './App.css';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import Nav from './components/pages/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="LogIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
