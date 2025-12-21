✅ What is a callback handler in React?

A callback handler is a function passed from a parent parent component to a Child component, so the child can send data or trigger actions in the parent.

⸻

🧠 Simple definition (remember this)

A callback handler allows a child component to communicate with its parent.

⸻

🧩 Simple example

Parent component

function Parent() {
  function handleMessage(msg) {
    console.log(msg);
  }

  return <Child onSend={handleMessage} />;
}

Child component

function Child({ onSend }) {
  return <button onClick={() => onSend("Hello Parent")}>Send</button>;
}

What happens?
	•	Parent passes handleMessage to Child
	•	Child calls it on button click
	•	Parent receives data from Child

⸻

🔁 Why callback handlers are needed
	•	React data flow is one-way (parent → child)
	•	Callback handlers let data go child → parent
	•	Used for:
	•	Form submissions
	•	Button clicks
	•	Updating parent state

⸻

🧠 One-line summary (best for exams)

Callback handlers are functions passed as props that allow child components to notify or update parent components.
