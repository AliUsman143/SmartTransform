import React from 'react';

const SearchBar = ({ searchQuery, handleFilter, setSearchQuery, setFilteredData, data, fields }) => {
    return (
        <div className='flex'>
            <input
                type="text"
                placeholder="Search Results"
                value={searchQuery}
                onChange={(e) => handleFilter(e, fields, setSearchQuery, setFilteredData, data)}
                className="bg-white px-3 py-1 rounded-full w-52 border border-blue-600 text-gray-700"
            />
        </div>
    );
};

export default SearchBar;