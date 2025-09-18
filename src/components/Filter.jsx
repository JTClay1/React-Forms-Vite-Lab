// Controlled search input (tests expect onSearchChange to be used)
export default function Filter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="filter">
      <div>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* The lab notes say the select doesn’t have to be controlled, but we’ll do it right */}
      <div>
        <label htmlFor="category">Filter by Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
    </section>
  );
}
