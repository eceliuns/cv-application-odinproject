import { GeneralInfo } from "./components/GeneralInfo";
import { EducationalExperience } from "./components/EducationalExperience";
import { WorkExperience } from "./components/WorkExperience";
import { Experiences } from "./components/Experiences";

function App() {
  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfo></GeneralInfo>
      <Experiences
        ExperienceComponent={EducationalExperience}
        buttonLabel="Add education"
      ></Experiences>
      <Experiences
        ExperienceComponent={WorkExperience}
        buttonLabel="Add work experience"
      ></Experiences>
      <Jobs></Jobs>
    </div>
  );
}

export default App;
