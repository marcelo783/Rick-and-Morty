import React from 'react';

const FilterMenu = ({ statusFilter, setStatusFilter, genderFilter, setGenderFilter }) => {
  return (
    <div className="filter-menu">
      <h2>Filtros</h2>
      <div className="filter-group">
        <label>Status:</label>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="text-black bg-white border border-gray-300 rounded-md py-1 px-2"
        >
          <option value="">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="Unknown">Desconhecido</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Gênero:</label>
        <select
          value={genderFilter}
          onChange={e => setGenderFilter(e.target.value)}
          className="text-black bg-white border border-gray-300 rounded-md py-1 px-2"
        >
          <option value="">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Feminino</option>
          <option value="Genderless">Sem Gênero</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
