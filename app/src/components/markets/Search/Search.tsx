import React from 'react';
import "./search.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Define the prop types for the Search component
interface SearchProps {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

function Search({ search, onSearchChange, onClearSearch }: SearchProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className='search-container'>
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
    {/* <Button variant="text" href="/coin-tracker" className="my-fav">My Favorites</Button> */}
    <button className="my-fav" onClick={() => navigate('/coin-tracker')}>
              My Favorites
            </button>
    </div>
  );
}

export default Search;
