import React, {useState} from "react";
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

  const [learnWords, setLearnWords]= useState(0);
  const handleLearned =() =>{
    setLearnWords(learnWords+1)
  }
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<CreateTable />} />
          <Route path="/game" element={<Card onLearned={handleLearned}/>} />
        </Routes>
        <div>Количество выученных слов: {learnWords}</div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
