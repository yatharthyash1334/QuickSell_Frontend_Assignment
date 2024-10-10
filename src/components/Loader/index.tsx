import React from 'react';
import './loader.css';

// Define a functional component for Loader
interface LoaderProps {
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullscreen = true }) => {
  return (
    <div className={`loader-container ${fullscreen ? 'fullscreen' : ''}`} aria-busy="true" aria-label="Loading content">
      <span className="loader">Loading...</span>
    </div>
  );
};

export default Loader;
