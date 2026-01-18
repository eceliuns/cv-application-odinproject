import { useState } from "react";
import { InputField } from "./InputField";
import { Textarea } from "./InputField";
import { DateInput } from "./DateInput";

function WorkExperience() {
  const [info, setInfo] = useState({
    companyName: "",
    title: "",
    responsabilities: "",
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
          <strong>Company Name:</strong> {info.companyName}
        </p>
        <p>
          <strong>Title:</strong> {info.title}
        </p>
        <p>
          <strong>Responsabilities:</strong> {info.responsabilities}
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
          label="Company Name"
          type="text"
          value={info.companyName}
          onChange={handleChange("companyName")}
        ></InputField>
        <InputField
          label="Title"
          type="text"
          value={info.title}
          onChange={handleChange("title")}
        ></InputField>
        <Textarea
          label="Responsabilities"
          value={info.responsabilities}
          onChange={handleChange("responsabilities")}
        ></Textarea>
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

export { WorkExperience };
