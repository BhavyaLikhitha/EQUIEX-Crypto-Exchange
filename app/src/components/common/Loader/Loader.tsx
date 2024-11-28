import { CircularProgress } from '@mui/material';
import React from 'react';
import './loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-background">
      <CircularProgress />
    </div>
  );
};

export default Loader;
