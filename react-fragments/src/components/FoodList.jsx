import FoodItem from "../components/FoodItem";
export default function FoodList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <FoodItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
}
