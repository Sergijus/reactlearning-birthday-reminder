const Person = ({ img, name, age }) => {
  return (
    <article className="person">
      <img src={img} alt={name} style={{ objectFit: 'cover' }} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
