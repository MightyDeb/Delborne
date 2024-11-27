import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./Landing"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
