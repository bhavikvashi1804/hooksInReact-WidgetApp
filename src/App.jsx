import React from 'react';

import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is JS front end library',
  },
  {
    title: 'React is developed by?',
    content: 'Facebook',
  },
  {
    title: 'Can you able to create mobile application using React?',
    content: 'Yes,you just to learn little bit more, React Native',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Yellow',
    value: 'yellow',
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
}

const showList=()=>{
  if(window.location.pathname==="/list"){
    return <Search />;
  }
}

const showDropdown=()=>{
  if(window.location.pathname==="/dropdown"){
    return <Dropdown />;
  }
}

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
}




export default () => {
  return (
    <div className="ui container">
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
}


