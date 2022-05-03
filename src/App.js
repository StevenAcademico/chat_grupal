import Registro from './view/auth/Registro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
