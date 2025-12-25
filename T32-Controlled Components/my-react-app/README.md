Controlled Components in React

A controlled component is a form element whose value is controlled by React state.

In a controlled component:
	•	The input value comes from state
	•	Changes are handled using an event handler
	•	React controls the data, not the DOM

Example

function App() {
  const [name, setName] = React.useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </>
  );
}

How it works
	•	value={name} → React controls the input value
	•	onChange → updates state when the user types
	•	UI updates automatically when state changes

Summary

Controlled components keep form data in React state, making it easier to validate, manage, and control user input.

⸻

One-line summary

A controlled component is an input element controlled by React state.
