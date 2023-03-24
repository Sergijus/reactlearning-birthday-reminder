import Person from './Person';
import data from '../data';
import { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { img, name, age, id } = person;

        return <Person key={id} img={img} name={name} age={age} />;
      })}

      <button
        type="button"
        className="btn btn-block"
        onClick={() => setPeople([])}
      >
        Clear all {people.length} items
      </button>
    </div>
  );
};
export default List;
