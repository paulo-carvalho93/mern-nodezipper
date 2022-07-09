import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import MyNotes from "./pages/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="notes" element={<MyNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
