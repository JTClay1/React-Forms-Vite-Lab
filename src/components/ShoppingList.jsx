import { useState } from "react";
import Item from "./Item.jsx";

// NOTE (me): tests type into a Search input that's inside this component
//            and they count <li> children under a UL with class "Items".
export default function ShoppingList({ items = [] }) {
  const [search, setSearch] = useState(""); // controlled input the tests check
  const q = search.trim().toLowerCase();

  // NOTE (me): show all on empty search; otherwise support partial matches
  const itemsToDisplay = items.filter((it) =>
    q === "" ? true : it.name.toLowerCase().includes(q)
  );

  return (
    <section className="card">
      <h2 className="card-title">Shopping List</h2>

      {/* NOTE (me): this input MUST exist here and use placeholder "Search" */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* NOTE (me): test queries .Items then reads .children length */}
      <ul className="Items">
        {itemsToDisplay.map((it) => (
          <Item key={it.id} name={it.name} category={it.category} />
        ))}
      </ul>
    </section>
  );
}
