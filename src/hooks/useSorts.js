import React from 'react';

const useSorts = (prints, categoryField, codeField) => {
  const sorted = {};
  
  prints.forEach(print => {
  const category = print[categoryField];
  const code = print[codeField];
  sorted[category] = {
  ...sorted[category],
  [code]: [...(sorted[category]?.[code] || []), print],
  };
  });
  
  return sorted;
  };
  
  export default useSorts;