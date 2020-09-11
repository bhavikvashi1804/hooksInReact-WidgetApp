import React,{useState} from 'react';

import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Header from './Components/Header';
import Route from './Components/Route';


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
  const [selectedOption,setSelectedOption]=useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select Color"
          options={options} 
          selected={selectedOption}
          onSelectedChange={setSelectedOption}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}


