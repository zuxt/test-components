import Select from './components/Select/Select';

import { useState } from 'react';

type TselectOption = {
  label: string;
  value: string | number;
};

const options: TselectOption[] = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
  { label: 'option 4', value: 4 },
  { label: 'option 5', value: 5 },
  { label: 'option 6', value: 6 },
  { label: 'option 7', value: 7 },
];

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </>
  );
}

export default App;
