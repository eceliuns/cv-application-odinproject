import { useState } from "react";
import { InputField } from "./InputField";
import { DateInput } from "./DateInput";

function EducationalExperience() {
  const [info, setInfo] = useState({
    degree: "",
    schoolName: "",
    city: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (e) => setInfo({ ...info, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  let content;
  if (submitted) {
    content = (
      <div>
        <p>
          <strong>Degree:</strong> {info.degree}
        </p>
        <p>
          <strong>School Name:</strong> {info.schoolName}
        </p>
        <p>
          <strong>City:</strong> {info.city}
        </p>
        <p>
          <strong>Start Date:</strong>
          {info.startMonth && info.startYear
            ? `${info.startMonth}/${info.startYear}`
            : ""}
        </p>
        <p>
          <strong>End Date:</strong>
          {info.endMonth && info.endYear
            ? `${info.endMonth}/${info.endYear}`
            : ""}
        </p>
      </div>
    );
  } else {
    content = (
      <section>
        <InputField
          label="Degree"
          type="text"
          value={info.degree}
          onChange={handleChange("degree")}
        ></InputField>
        <InputField
          label="School Name"
          type="text"
          value={info.schoolName}
          onChange={handleChange("schoolName")}
        ></InputField>
        <InputField
          label="City"
          type="text"
          value={info.city}
          onChange={handleChange("city")}
        ></InputField>
        <DateInput
          label="Start Date"
          month={info.startMonth}
          year={info.startYear}
          onMonthChange={handleChange("startMonth")}
          onYearChange={handleChange("startYear")}
        />
        <DateInput
          label="End Date"
          month={info.endMonth}
          year={info.endYear}
          onMonthChange={handleChange("endMonth")}
          onYearChange={handleChange("endYear")}
        />
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {content}
      {!submitted && <button onClick={() => setSubmitted(true)}>Submit</button>}
      {submitted && <button onClick={() => setSubmitted(false)}>Edit</button>}
    </form>
  );
}

export { EducationalExperience };
