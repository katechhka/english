
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import words from './utils/words';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        {words.map((word, i) => (
          <Table
          key={i}
            id={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            isSelected={word.isSelected}
          ></Table>
        ))}
      </div>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
