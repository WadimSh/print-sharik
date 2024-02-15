const sortPrintsByCategory = (prints, categor, cod) => {
  const sortedPrints = {};
  prints.forEach((print) => {
    const category = print[categor];
    const code = print[cod];
    if (!(category in sortedPrints)) { sortedPrints[category] = {}; }
    const codes = sortedPrints[category];
    if (!(code in codes)) { codes[code] = []; }
    codes[code].push(print);
  })
  return sortedPrints;
};

export default sortPrintsByCategory;