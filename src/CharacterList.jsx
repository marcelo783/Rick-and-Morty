import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CardCharacterList from './CardCharacterList';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); // Estado para armazenar os personagens
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa
  const [statusFilter, setStatusFilter] = useState(''); // Estado para o filtro de status
  const [genderFilter, setGenderFilter] = useState(''); // Estado para o filtro de gênero
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual
  const [totalPages, setTotalPages] = useState(1); // Estado para armazenar o número total de páginas

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(response => {
        console.log(response.data.info);
        setCharacters(response.data.results); // Define os personagens na resposta
        setTotalPages(response.data.info.pages);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, [currentPage]);

  // Função para carregar mais personagens ao clicar no botão
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // filtrar personagens.  pesquisa e filtros de status/gênero
  const filteredCharacters = characters.filter(character => {
    return (
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === '' || character.status === statusFilter) &&
      (genderFilter === '' || character.gender === genderFilter)
    );
  });

  return (
    <div>
      {/*Header com os estados e funções de filtro */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />

      {/* exibir os personagens filtrados */}
      <div className="grid grid-cols-1 m:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-40">
        {filteredCharacters.map(character => (
          <CardCharacterList key={character.id} character={character} />
        ))}
      </div>

      {/* Botão "Ver mais" */}
      {currentPage < totalPages && (
        <div className="text-center mt-4">
          <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver mais
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
