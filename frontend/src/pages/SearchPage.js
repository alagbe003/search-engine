import React, { useState } from 'react';
import AdvancedFilters from '../components/AdvancedFilters';
import SearchOperators from '../components/SearchOperators';
import VoiceSearch from '../components/VoiceSearch';
import SearchBar from '../components/SearchBar';
import '../styles/SearchPage.css';

function SearchPage() {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="logo">🔍 Search Engine</h1>
        <p className="tagline">Aggregating the web for you</p>
        
        <div className="search-bar-wrapper">
          <SearchBar onSearch={(query) => {}} />
          <VoiceSearch onSearch={(query) => {}} />
        </div>

        <button 
          className="filters-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {showFilters && (
          <AdvancedFilters onFiltersChange={handleFiltersChange} />
        )}

        <SearchOperators />
      </div>
    </div>
  );
}

export default SearchPage;
