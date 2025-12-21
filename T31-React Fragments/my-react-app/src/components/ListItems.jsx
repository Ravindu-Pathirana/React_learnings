import { Fragment } from "react/jsx-runtime";
//directly importing Fragment from react/jsx-runtime to avoid importing the whole react library.

const ListItems = ({ items }) => {
  return (
    <Fragment>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Fragment>
  );
};

export default ListItems;

//In today, we donot use React.
// Fragment or <> </> to use fragments.
// We can directly import Fragment from 'react/jsx-runtime' and use it as shown above.
// This helps in reducing the bundle size by avoiding importing the whole React library when only Fragment is needed.
// use empty tags <> </> as shorthand for fragments in today.
