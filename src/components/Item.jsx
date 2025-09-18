export default function Item({ name, category }) {
  return (
    <li className="item">
      <span className="item-name">{name}</span>{" "}
      <span className="item-category">({category})</span>
    </li>
  );
}
