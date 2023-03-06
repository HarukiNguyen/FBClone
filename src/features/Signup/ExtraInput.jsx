import CheckboxInputs from './CheckboxInputs';
import SelectInputs from './SelectInputs';

function ExtraInput({ extraInputInfos }) {
  return extraInputInfos.map((info) => {
    if (info.type === 'select') {
      return <SelectInputs data={info} />;
    } else {
      return <CheckboxInputs data={info} />;
    }
  });
}

export default ExtraInput;
