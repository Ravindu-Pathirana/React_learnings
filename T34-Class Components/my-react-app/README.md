Class Components in React

A class component is a way to create a React component using a JavaScript class.

Class components:
• Extend React.Component
• Use a render() method to return JSX
• Were commonly used before React Hooks

⸻

Example

```class Welcome extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}
```

⸻

Key points
• render() is required
• JSX is returned inside render()
• Class components can use state and props
• Hooks are not used in class components

⸻

Summary

Class components define React components using ES6 classes and are mainly seen in older React codebases.

⸻

One-line summary

A class component is a React component written using a JavaScript class.
