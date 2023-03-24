const Person = ({ img, name, age }) => {
  return (
    <div className="person">
      <img src={img} style={{ objectFit: 'cover' }} />
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  );
};
export default Person;
