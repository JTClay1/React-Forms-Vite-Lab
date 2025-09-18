import { useState } from "react";
import { v4 as uuid } from "uuid";

// Controlled form that bubbles new item up via onItemFormSubmit
export default function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // required by lab

  function handleSubmit(e) {
    e.preventDefault(); // important for tests: prevent page refresh
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    onItemFormSubmit(newItem); // pass up
    // clear for next entry
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
        <option value="Desserts">Desserts</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}
