ArrayMap() Function :-
What this does:
• map() loops through the array
• Displays each name

function ArrayMap({ names }) {

function ArrayMap({ names }) {
  return (
    <div>
      <h2>Using map()</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayMap;


ArrayFilter() Function :-
What this does:
• filter() selects names starting with A
• map() displays the filtered names

function ArrayFilter({ names }) {

const filteredNames = names.filter((name) => name.startsWith("A"));


