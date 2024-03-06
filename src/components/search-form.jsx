import { useState, useContext } from "react";
import { ConfigContext } from "../context/config-context";

import useSorts from "../hooks/useSorts";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import Title from "../ui/title/title";
import Paragraph from "../ui/paragraph/paragraph";

import { Search } from "../ui/icons/search";
import useLocalStorage from "../hooks/useLocalStorage";

const SearchForm = () => {
  const [logic, setLogic] = useState(false);
  const config = useContext(ConfigContext);
  const sorted  = useSorts(config, 'category', 'code');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogic(false);
    
  }

  const handleOnClick = () => {
    setLogic(!logic);
    
  }

  const text = ["Этот текст служит только для демонстрации и не более того."];
  
  return (
    <>
      <Title
        level={1}
        className='text text_type_second-medium'
      >
        Коммерческая печать на шарах
      </Title>
      <Paragraph 
        className='text text_type_main-default'
        text={text}
      />
    <form className='form flex_row' onSubmit={handleSubmit}>
      <Input 
        onClick={handleOnClick}
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
      {/*logic && <div className='search'></div>*/}
    </form>
    <div className='main_width'> 
    {Object.keys(sorted).map((category, indexCategory) => (
    <div key={indexCategory} >
      <h2>{category}</h2>
      {Object.keys(sorted[category]).map((code, indexCode) => (
        <div key={indexCode}>
          <h3>{code}</h3>
          <ul style={{ display: 'flex', gap: '10px', marginTop: '50px', flexWrap: 'wrap' }}>
            {sorted[category][code].map((print, indexPrint) => (
              <li key={indexPrint}>
                <img src={window.location.origin + print.image} alt="" width='100' />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ))}
    </div>
     

    
    
    </>
    
  )
};

export default SearchForm;