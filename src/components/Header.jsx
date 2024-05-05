// Header.jsx

import React from 'react';
import FilterMenu from '../FilterMenu';

const Header = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, genderFilter, setGenderFilter }) => {
  return (
    <header className="flex flex-col items-center justify-between fixed top-0 left-0 w-full h-36 md:flex-row md:h-24 lg:h-32 bg-gray-800 text-white p-4 md:p-6 lg:p-8">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Personagens de Rick and Morty</h1>

      <div className="flex items-center gap-7">
        <input
          type="text"
          placeholder="Pesquisar personagem"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-600 rounded-md py-2 px-3 mr-3 text-black"
        />

        <FilterMenu
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
      </div>
    </header>
  );
};

export default Header;
