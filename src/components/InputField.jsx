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

export { InputField };
