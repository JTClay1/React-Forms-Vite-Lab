import { useState } from "react";
import ShoppingList from "./ShoppingList.jsx";
import Filter from "./Filter.jsx";
import ItemForm from "./ItemForm.jsx";
import Header from "./Header.jsx";
import itemsData from "../data/items.js";

export default function App() {
  // NOTE (me): keep a single source of truth up here so every child renders in sync
  const [items, setItems] = useState(itemsData);
  const [searchText, setSearchText] = useState("");          // controlled search
  const [selectedCategory, setSelectedCategory] = useState("All"); // simple dropdown

  // NOTE (me): small pass-through handlers so children stay “dumb”
  function handleSearchChange(nextText) {
    setSearchText(nextText);
  }

  function handleCategoryChange(nextCategory) {
    setSelectedCategory(nextCategory);
  }

  function handleItemFormSubmit(newItem) {
    // NOTE (me): never mutate state arrays directly
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="container">
      <Header />
      <section className="toolbar">
        <Filter
          searchText={searchText}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      </section>

      <ShoppingList
        items={items}
        searchText={searchText}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}
