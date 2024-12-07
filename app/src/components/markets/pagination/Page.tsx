import React from 'react';
import Pagination from '@mui/material/Pagination';
import './page.css';

// Define the prop types for the Page component
interface PageProps {
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void; // Function to handle page changes
}

// Page component for rendering pagination
export default function Page({ page, handlePageChange }: PageProps): JSX.Element {
  return (
    <div className="pagination-div">
      <Pagination
       // Style overrides for Material-UI's Pagination component
        sx={{
          "& .MuiPaginationItem-text": {
            color: "black !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
            backgroundColor: "var(--magenta)",
            borderColor: "var(--magenta)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
