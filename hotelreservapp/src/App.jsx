import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import LoginAdmin from './pages/LoginAdmin';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Navigation menu paths */}
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/loginAdmin" element={<LoginAdmin />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;