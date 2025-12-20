✅ What is useState?

useState is a React Hook used to store and update data (state) inside a function component.

👉 When the state changes, React automatically re-renders the UI.

⸻

🧠 Simple definition (remember this)

useState lets a component remember and change values over time.

⸻

🧩 Basic syntax

const [value, setValue] = useState(initialValue);

	•	value → current state
	•	setValue → function to update state
	•	initialValue → starting value

⸻

🧪 Simple example

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}

What happens?
	1.	count starts at 0
	2.	Button clicked
	3.	setCount updates the value
	4.	React re-renders → UI updates

⸻

🔁 Important rule (very important)

❌ Never change state directly:

count = count + 1;   // WRONG

✅ Always use setter function:

setCount(count + 1); // CORRECT


⸻

🧠 Another simple example (input)

function App() {
  const [name, setName] = React.useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

👉 The input remembers what you type using state.

⸻

⚠️ Key points to remember
	•	useState is used only inside function components
	•	State changes cause re-render
	•	State is local to the component

⸻

🧠 One-line summary (best for exams)

useState is a React Hook that allows function components to store and update state.

