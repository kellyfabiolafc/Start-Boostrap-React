export const CardContainer = ({ gallery }) => {
  return (
    <div>
      {gallery.map((element) => (
        <Card element={element} key={element.id}></Card>
      ))}
    </div>
  );
};

const Card = ({ element }) => {
  const { url, title, description } = element;
  return (
    <div>
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
