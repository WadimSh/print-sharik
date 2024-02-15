import React from "react";
import data from "../../utils/data.json";
import sortPrintsByCategory from "../../utils/sort-prints";
import Dropdown from "../../ui/input/drop";

const CardsBlock = () => {

  console.log(sortPrintsByCategory(data.prints, 'category', 'code'))

  return (
    <>
     <Dropdown />
    </>
  );
};

export default CardsBlock;