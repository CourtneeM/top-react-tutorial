import './App.css';
import PersonalHooks from './components/PersonalHooks.js';
import EducationHooks from './components/EducationHooks.js';
import ExperienceHooks from './components/ExperienceHooks.js';

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <h1>CV Application</h1>
        <PersonalHooks />
        <EducationHooks />
        <ExperienceHooks />
      </div>
    </div>
  );
}

export default App;