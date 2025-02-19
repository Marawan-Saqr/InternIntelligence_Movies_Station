import "./Search.css";
import { movieContext } from "../../Contexts/MovieContext.jsx";
import { useContext, useState } from "react";

const Search = () => {
  // Component States
  const { searchWord } = useContext(movieContext);
  const [queryLength, setQueryLength] = useState("");

  // Handle Length Function
  const handleChange = (e) => {

    const value = e.target.value;
  
    if (value.length <= 50) {
      setQueryLength(e.target.value)
      searchWord(e.target.value);
    }
  };

  return (
    <div className="search-container mb-4">
      <h6 className="search-title">Search</h6>
      <input
        value={queryLength}
        maxLength={50}
        type="search"
        placeholder="Search..."
        className="search-input form-control"
        onChange={handleChange}
      />
      <small className="char-count">{queryLength.length}/50</small>
    </div>
  );
};

export default Search;
