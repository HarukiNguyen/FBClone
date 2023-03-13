import CheckboxInputs from './CheckboxInputs';
import SelectInputs from './SelectInputs';

function ExtraInput({ extraInputInfos }) {
  // I use `index` for `key` because the input won't be mutated --> no risk
  const extraInputGrClassName = {
    wrapper: 'py-[5px]',
    titleCN: '',
  };
  return extraInputInfos.map((info, index) => {
    if (info.type === 'select') {
      return (
        <SelectInputs
          key={index}
          data={info}
          extraInputGrClassName={extraInputGrClassName}
        />
      );
    } else {
      return (
        <CheckboxInputs
          key={index}
          data={info}
          extraInputGrClassName={extraInputGrClassName}
        />
      );
    }
  });
}

export default ExtraInput;
