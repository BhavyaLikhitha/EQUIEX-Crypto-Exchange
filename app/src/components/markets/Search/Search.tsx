import React from 'react';
import "./search.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// Define the prop types for the Search component
interface SearchProps {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

function Search({ search, onSearchChange, onClearSearch }: SearchProps): JSX.Element {
  return (
    <div className='search-flex'>
      <SearchRoundedIcon />
      <input
        className='search-input'
        placeholder="Search"
        type='text'
        value={search}
        onChange={onSearchChange}
      />
      {search && (
        <button className="clear-btn" onClick={onClearSearch}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
