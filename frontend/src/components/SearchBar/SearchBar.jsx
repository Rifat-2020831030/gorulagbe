import "./SearchBar.css";
const Searchbar = ({ setSearchTxt, performeSearch }) => {
  const handleSearch = (e) => {
    setSearchTxt(e.target.value);
    // performeSearch();
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={handleSearch}
        />
        <button className="search-button" onSubmit={performeSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
