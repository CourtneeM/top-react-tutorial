import './App.css';
import PersonalHooks from './components/PersonalHooks.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <h1>CV Application</h1>
        <PersonalHooks />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;