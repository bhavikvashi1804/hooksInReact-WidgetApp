import React from 'react';

import Accordion from './Components/Accordion';

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}


