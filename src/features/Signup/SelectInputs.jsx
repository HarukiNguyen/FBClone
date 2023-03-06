function SelectInputs({ data }) {
  const { title, options } = data;

  const selects = Object.entries(options).map(([key, val]) => {
    const { name, start, end, defaultVal } = val;
    let options = [];

    if (key !== 'years') {
      for (let i = start; i <= end; i++) {
        const option = (
          <option key={i} value={i}>
            {i}
          </option>
        );
        options = [...options, option];
      }
    } else {
      for (let i = end; i >= start; i--) {
        const option = (
          <option key={i} value={i}>
            {i}
          </option>
        );
        options = [...options, option];
      }
    }

    return (
      <select
        key={key}
        name={key}
        aria-label={name}
        title={name}
        defaultValue={defaultVal}
      >
        {options}
      </select>
    );
  });

  return (
    <div>
      <span>{title}</span>
      <div>{selects}</div>
    </div>
  );
}

export default SelectInputs;
