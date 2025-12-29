Higher-Order Components (HOC) in React

A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional functionality.

HOCs are used to:
	•	Reuse common logic
	•	Share behavior between components
	•	Keep components clean and focused

⸻

Simple idea

A HOC wraps a component to enhance it.

⸻

Example

```function withMessage(WrappedComponent) {
  return function EnhancedComponent() {
    return (
      <>
        <p>Hello from HOC</p>
        <WrappedComponent />
      </>
    );
  };
}
```

⸻

Summary

Higher-Order Components allow code reuse by wrapping components and adding extra features without modifying the original component.

⸻

One-line summary

A Higher-Order Component is a function that adds extra behavior to a React component.
