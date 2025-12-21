ArrayMap() Function :-
What this does:
• map() loops through the array
• Displays each name

function ArrayMap({ names }) {

"return (
<div>
<ul>
{names.map((name, index) => (
<li key={index}>{name}</li>
))}
</ul>
</div>
);
}"


ArrayFilter() Function :-
What this does:
• filter() selects names starting with A
• map() displays the filtered names

function ArrayFilter({ names }) {

const filteredNames = names.filter((name) => name.startsWith("A"));


