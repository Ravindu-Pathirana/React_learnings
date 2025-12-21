import ListItems from "./ListItems";

const OrderedList = ({ items }) => {
  return (
    <ol>
      <ListItems items={items} />
    </ol>
  );
};

export default OrderedList;
