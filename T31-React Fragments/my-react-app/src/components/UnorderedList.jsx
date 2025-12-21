import ListItems from "./ListItems";

const UnorderedList = ({ items }) => {
  return (
    <ul>
      <ListItems items={items} />
    </ul>
  );
};

export default UnorderedList;
