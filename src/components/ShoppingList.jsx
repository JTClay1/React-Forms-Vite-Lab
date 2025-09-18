import Item from "./Item.jsx";

export default function ShoppingList({ items, searchText, selectedCategory }) {
  const normalized = searchText.trim().toLowerCase();

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      normalized.length === 0 ||
      item.name.toLowerCase().includes(normalized);
    return matchesCategory && matchesSearch;
  });

  return (
    <ul className="shopping-list">
      {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
      {itemsToDisplay.length === 0 && (
        <li style={{ opacity: 0.7 }}>No items match your filters.</li>
      )}
    </ul>
  );
}
