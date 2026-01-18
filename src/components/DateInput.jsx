function DateInput({ label, month, year, onMonthChange, onYearChange }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();

  const years = [];
  for (let y = 1900; y <= currentYear; y++) {
    years.push(y);
  }

  return (
    <div>
      <div>{label}</div>
      <select value={month} onChange={onMonthChange}>
        <option value="">Month</option>
        {monthNames.map((monthName, i) => {
          const value = String(i + 1).padStart(2, "0");
          return (
            <option key={i} value={value}>
              {monthName}
            </option>
          );
        })}
      </select>

      <select value={year} onChange={onYearChange}>
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}

export { DateInput };
