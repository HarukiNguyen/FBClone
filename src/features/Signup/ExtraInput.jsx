import CheckboxInputs from './CheckboxInputs';
import SelectInputs from './SelectInputs';

function ExtraInput({ extraInputInfos }) {
  // I use `index` for `key` because the input won't be mutated --> no risk
  return extraInputInfos.map((info, index) => {
    if (info.type === 'select') {
      return <SelectInputs key={index} data={info} />;
    } else {
      return <CheckboxInputs key={index} data={info} />;
    }
  });
}

export default ExtraInput;
