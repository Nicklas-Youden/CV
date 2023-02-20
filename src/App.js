import './App.scss';
import "./scss/CvSetup.scss"
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
      <main className='CvMain'>

      <Contact/>
      <Resume/>
      <Education/>
      <Experience/>
      <Personal/>
      <ItCompetence/>
      <OtherExp/>
      
      
      </main>
      <CvFooter/>
    </div>

  );
}

export default App;
