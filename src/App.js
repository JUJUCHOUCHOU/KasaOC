import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../src/Pages/Welcome/Welcome';
import About from '../src/Pages/About/About';
import Notfound from '../src/Pages/Notfound/Notfound';
import Locations from './Pages/Locations/Locations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Locations"element={<Locations />}/>
        <Route path="*" element={<Notfound />}/>{/*Last because if other pages are not found...*/}
      </Routes>
    </Router>
  );
}

export default App;
