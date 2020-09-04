import React from 'react';

import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

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

export default () => {
  return (
    <div className="ui container">
      <Dropdown options={options}/>
    </div>
  );
}


