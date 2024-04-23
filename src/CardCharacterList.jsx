import React from 'react';

const CardCharacterList = ({ character }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <img src={character.image} alt={character.name} className="w-full rounded-md mb-2" />
      <p className="text-lg font-semibold">{character.name}</p>
      <p>Status: {character.status}</p>
      <p>Gênero: {character.gender}</p>
    </div>
  );
};

export default CardCharacterList;
