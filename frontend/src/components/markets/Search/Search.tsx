import React from 'react';
import "./search.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Define the prop types for the Search component
interface SearchProps {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void; // Function to clear the search term
}

function Search({ search, onSearchChange, onClearSearch }: SearchProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className='search-container'> {/* Container for the entire search section */}
    <div className='search-flex'> {/* Flex container for input and search icon */}
      <SearchRoundedIcon />
      <input
        className='search-input'
        placeholder="Search"
        type='text'
        value={search}
        onChange={onSearchChange}
      />

       {/* Clear button visible only when there's text in the search field */}
      {search && (
        <button className="clear-btn" onClick={onClearSearch}>
          Clear
        </button>
      )}
      
    </div>
    {/* Button to navigate to the 'My Favorites' page */}
    <button className="my-fav" onClick={() => navigate('/coin-tracker')}>
              My Favorites
            </button>
    </div>
  );
}

export default Search;
