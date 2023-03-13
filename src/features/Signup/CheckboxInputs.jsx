function CheckboxInputs({ data }) {
  const { title, type, values, name } = data;

  const checkboxes = Object.entries(values).map(([key, val]) => {
    return (
      <div key={val}>
        <label htmlFor={key}>{val}</label>
        <input
          key={key}
          type={type}
          aria-label={val}
          title={val}
          name={name}
          id={key}
        />
      </div>
    );
  });

  return (
    <div>
      <span>{title}</span>
      <div>{checkboxes}</div>
    </div>
  );
}

export default CheckboxInputs;
