import React from "react";
import data from "../../utils/data.json";
import sortPrintsByCategory from "../../utils/sort-prints";

const CardsBlock = () => {

  console.log(sortPrintsByCategory(data.prints, 'category', 'code'))

  return (
    <>

    </>
  );
};

export default CardsBlock;