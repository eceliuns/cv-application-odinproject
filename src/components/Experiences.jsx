import { useState } from "react";

function Experiences({ ExperienceComponent, title, buttonLabel }) {
  const [experiences, setExperiences] = useState([{ id: crypto.randomUUID() }]);

  function addExperience() {
    setExperiences((prev) => [...prev, { id: crypto.randomUUID() }]);
  }

  function deleteExperience(id) {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  }

  return (
    <div>
      <h2>{title}</h2>
      {experiences.map((experience) => (
        <ExperienceComponent
          key={experience.id}
          onDelete={() => deleteExperience(experience.id)}
        ></ExperienceComponent>
      ))}

      <button type="button" onClick={addExperience}>
        {buttonLabel}
      </button>
    </div>
  );
}

export { Experiences };
