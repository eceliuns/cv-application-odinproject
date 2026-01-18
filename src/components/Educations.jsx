import { useState } from "react";
import { EducationalExperience } from "./EducationalExperience";

function Educations() {
  const [educationList, setEducationList] = useState([{}]);

  function addEducation() {
    setEducationList([...educationList, {}]);
  }

  return (
    <div>
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index}>
          <EducationalExperience />
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export { Educations };
