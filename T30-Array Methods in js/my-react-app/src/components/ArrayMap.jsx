function ArrayMap({ names }) {
  return (
    <div>
      <h2>Using Array Map()</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayMap;
