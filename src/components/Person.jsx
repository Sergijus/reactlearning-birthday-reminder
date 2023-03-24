const Person = ({ img, name, age }) => {
  return (
    <div className="person">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
};
export default Person;
