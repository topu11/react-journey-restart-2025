export default function FoodItem({ index, item }) {
  const strlower = (item) => item.toLowerCase();
  return (
    <li className="list-group-item" key={index}>
      {strlower(item)}
    </li>
  );
}
