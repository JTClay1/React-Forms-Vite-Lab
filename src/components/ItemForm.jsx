import { useState } from "react";
import { v4 as uuid } from "uuid";

// NOTE (me): local state for form controls; I bubble the final object up
export default function ItemForm({ onItemFormSubmit = () => {} }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // default first option

  function handleSubmit(e) {
    e.preventDefault(); // NOTE (me): stay in SPA, no page refresh
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
    // NOTE (me): quick reset for next entry
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>

      <label htmlFor="item-name">Name</label>
      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="item-category">Category</label>
      <select
        id="item-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        {/* NOTE (me): singular "Dessert" to match test data/expectations */}
        <option value="Dessert">Dessert</option>
      </select>

      {/* NOTE (me): tests look for this exact text */}
      <button type="submit">Add to List</button>
    </form>
  );
}
