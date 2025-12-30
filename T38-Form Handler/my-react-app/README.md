React Single Field Handler (Form Handling)

A single field handler is a technique used in React to manage multiple form inputs using one useState and one handler function.

This approach works for:
• Text inputs
• Number inputs
• Checkboxes
• Radio buttons

⸻

How it works
• All form values are stored in one state object
• Each input uses the name attribute
• One handler updates the correct field based on input type

⸻

Example

```function Form() {
  const [formData, setFormData] = React.useState({
    username: "",
    age: "",
    gender: "",
    agree: false
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  return (
    <>
      <input type="text" name="username" onChange={handleChange} />
      <input type="number" name="age" onChange={handleChange} />

      <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
      <input type="radio" name="gender" value="female" onChange={handleChange} /> Female

      <input type="checkbox" name="agree" onChange={handleChange} />
    </>
  );
}
```

⸻

Summary

A single field handler simplifies form handling by managing all input types with one state object and one change handler.

⸻

One-line summary

A single field handler manages all form inputs using one state and one event handler in React.
