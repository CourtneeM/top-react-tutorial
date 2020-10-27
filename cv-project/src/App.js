import './App.css';
import Personal from './components/Personal.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <h1>CV Application</h1>
        <Personal />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;