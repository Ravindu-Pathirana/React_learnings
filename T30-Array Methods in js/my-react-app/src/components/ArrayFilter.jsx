function ArrayFilter({ names }) {
  const filteredNames = names.filter((name) =>
    name.toLowerCase().startsWith("s"),
  );

  return (
    <div>
      <h2>Using Array Filter()</h2>
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayFilter;
