import React from "react";
//import data from "../../utils/data.json";
import sortPrintsByCategory from "../../utils/sort-prints";
import Dropdown from "../../ui/dropdown/dropdown";

const CardsBlock = () => {

  //console.log(sortPrintsByCategory(data.prints, 'category', 'code'))

  return (
    <div style={{ display: "inline-block" }}>
     <Dropdown />
    </div>
  );
};

export default CardsBlock;