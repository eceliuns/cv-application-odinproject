function InputField({ label, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} onChange={onChange}></input>
      </label>
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={onChange}></textarea>
    </div>
  );
}

export { InputField, Textarea };
