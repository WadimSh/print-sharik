import { useState } from 'react';

const useSorts = (prints, categoryField, codeField) => {
const [sorted, setSorted] = useState({});

prints.forEach((print) => {
const category = print[categoryField];
const code = print[codeField];

setSorted((prevState) => ({
  ...prevState,
  [category]: {
    ...prevState[category],
    [code]: [...(prevState[category]?.[code] || []), print],
  },
}));
});

return sorted;
};

export default useSorts;