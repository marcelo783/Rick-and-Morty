// Header.jsx

import React from 'react';
import FilterMenu from '../FilterMenu';

const Header = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, genderFilter, setGenderFilter }) => {
  return (
    <header className=" 2x1:flex-col flex items-center  text-cente  justify-between fixed h-32  w-full bg-gray-800 text-white p-10    ">
      <h2 className="text-2xl font-bold r">Personagens de Rick and Morty</h2>

      <div className="flex items-center">
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
