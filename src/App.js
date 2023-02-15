import './App.scss';
import CvHeader from "./Components/CvHeader";
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Personal from './Components/PersonalCompetence';
import OtherExp from './Components/OtherCompetence';
import ItCompetence from './Components/ItCompetence';
import CvFooter from './Components/Footer';



function App() {
  return (
    <div className="App">
      <CvHeader></CvHeader>
      <main>

      <Contact/>
      <Resume/>
      <Education/>
      <Experience/>
      <Personal/>
      <OtherExp/>
      <ItCompetence/>
      
      
      </main>
      <CvFooter/>
    </div>

  );
}

export default App;
