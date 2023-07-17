const CharacterDetails = ({ name, race, description, img }) => {
  return (
    <section className="character-details-container">
      <h3>{name}</h3>
      <h4>{race}</h4>
      <p>{description}</p>
      <img src={img}></img>
    </section>
  );
};

export default CharacterDetails;
