// NOTE (me): parent owns this state; keep purely controlled/presentational
export default function Filter({
  search = "",
  onSearchChange = () => {},
  selectedCategory = "All",
  onCategoryChange = () => {},
}) {
  return (
    <form className="card filter" onSubmit={(e) => e.preventDefault()}>
      <h2 className="card-title">Find Items</h2>

      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={search}                                   // NOTE (me): controlled via prop
        onChange={(e) => onSearchChange(e.target.value)} // bubble changes up
      />

      {/* NOTE (me): rename label so tests don’t see two "Category" labels */}
      <label htmlFor="filter-type">Filter</label>
      <select
        id="filter-type"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </form>
  );
}
