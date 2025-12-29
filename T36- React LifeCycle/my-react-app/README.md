React Component Lifecycle

The React lifecycle describes the stages a component goes through from creation to removal.

Lifecycle stages
• Mounting – Component is created and added to the DOM
• Updating – Component re-renders when state or props change
• Unmounting – Component is removed from the DOM

⸻

Class Component Lifecycle Methods

In class components, lifecycle methods are built-in functions that run at specific stages.
• componentDidMount()
Runs after the component is first rendered (mounting)
• componentDidUpdate()
Runs after the component updates (state or props change)
• componentWillUnmount()
Runs before the component is removed from the DOM

Example

```class Example extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return <h1>Lifecycle Example</h1>;
  }
}```


⸻

useEffect Lifecycle Equivalent (Function Components)

In function components, the useEffect Hook is used instead of lifecycle methods.
	•	Runs after render
	•	Can act like mount, update, and unmount

Example

```React.useEffect(() => {
console.log("Component mounted or updated");

return () => {
console.log("Component unmounted");
};
}, []);```

How it maps to class lifecycle
	•	componentDidMount → useEffect(() => {}, [])
	•	componentDidUpdate → useEffect(() => {})
	•	componentWillUnmount → cleanup function in useEffect

⸻

Summary

Class components use lifecycle methods, while function components use the useEffect Hook to manage lifecycle behavior.

⸻

One-line summary

React lifecycle methods manage component behavior during mounting, updating, and unmounting.

