import Person from './Person';
import data from '../data';
import { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState(data);

  return people.map((person) => {
    const { img, name, age, id } = person;

    return (
      <div className="container" key={id}>
        <Person img={img} name={name} age={age} />
      </div>
    );
  });
};
export default List;
