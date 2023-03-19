
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CreateTable from './components/CreateTable/CreateTable';
import Card from './components/Card/Card';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<CreateTable />} />
          <Route path="/game" element={<Card />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
