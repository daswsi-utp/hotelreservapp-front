import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioReserva from './components/FormularioReserva';
import ConfirmacionReserva from './components/ConfirmacionReserva';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioReserva />} />
        <Route path="/confirmacion" element={<ConfirmacionReserva />} />
      </Routes>
    </Router>
  );
}

export default App;
