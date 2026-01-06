import { useState } from "react";
import { InputField } from "./InputField";

function GeneralInfo() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
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
          <strong>Name:</strong> {info.firstName}
        </p>
        <p>
          <strong>Surname:</strong> {info.lastName}
        </p>
        <p>
          <strong>Address:</strong> {info.address}
        </p>
        <p>
          <strong>E-mail:</strong> {info.email}
        </p>
      </div>
    );
  } else {
    content = (
      <section>
        <h2>General Information</h2>

        <InputField
          label="First Name"
          type="text"
          value={info.firstName}
          onChange={handleChange("firstName")}
        ></InputField>

        <InputField
          label="Last Name"
          type="text"
          value={info.lastName}
          onChange={handleChange("lastName")}
        ></InputField>

        <InputField
          label="Address"
          type="text"
          value={info.address}
          onChange={handleChange("address")}
        ></InputField>

        <InputField
          label="E-mail"
          type="email"
          value={info.email}
          onChange={handleChange("email")}
        ></InputField>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>General Information</h2>
      {content}
      {!submitted && <button onClick={() => setSubmitted(true)}>Submit</button>}
      {submitted && <button onClick={() => setSubmitted(false)}>Edit</button>}
    </form>
  );
}

export { GeneralInfo };
