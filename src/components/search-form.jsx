import React from "react";

import Input from "../ui/input/input";
import Button from "../ui/button/button";
import { Search } from "../ui/icons/search";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <form className='form flex_row' onSubmit={handleSubmit}>
      <Input 
        type='text'
        className='input text_type_main-default'
        placeholder='Введите артикул товара или тематику, которая вас интересует'
      />
      <Button
        className='button button_primary flex_center text_type_second-medium text_color_white'
        leftIcon={<Search/>} 
        buttonType='submit'
        buttonText='Найти'
      />
    </form>
  )
};

export default SearchForm;