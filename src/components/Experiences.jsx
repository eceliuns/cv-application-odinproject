import { useState } from "react";

function Experiences({ ExperienceComponent, buttonLabel }) {
  const [experiences, setExperiences] = useState([ExperienceComponent]);

  function addExperience() {
    setExperiences([...experiences, {}]);
  }

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index}>
          <ExperienceComponent></ExperienceComponent>
        </div>
      ))}

      <button type="button" onClick={addExperience}>
        {buttonLabel}
      </button>
    </div>
  );
}

export { Experiences };
