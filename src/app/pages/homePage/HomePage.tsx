import { useCallback, useEffect, useState } from "react";
import { CharactersServices } from "../../shared/services/api/characters/CharactersServices";
import { CharacterCard } from "../../shared/components/characters/CardCharacter";
import { Nav } from "../../shared/components/nav/Nav";
import { Modal } from "../../shared/components/modal/Modal";

interface Character {
  uuid: string;
  displayName: string;
  description: string;
  displayIconSmall: string;
  fullPortrait: string;
  background: string;
  role: {
    displayName: string;
    displayIcon: string;
  };
  abilities: [
    {
      slot: string;
      displayName: string;
      description: string;
      displayIcon: string;
    }
  ];
}

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [characters, setCharacters] = useState<Character[]>([]);

  const [filteredItems, setFilteredItems] = useState<Character[]>(characters);

  useEffect(() => {
    CharactersServices.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        const charactersArray = result.data || [];
        setCharacters(charactersArray);
        setFilteredItems(charactersArray);
      }
    });
  }, []);

  const handleModal = (character: Character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const filtered = characters.filter((item) =>
      item.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="m-0 p-0">
      <Nav
        onSearchChange={(value) => {
          handleSearch(value);
        }}
      />

      <div className="bg-slate-200 flex ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  sm:grid-cols-2 items-center mx-20 p-5 shadow rounded">
          {filteredItems.map((character, index) => (
            <CharacterCard
              key={index}
              onClick={() => handleModal(character)}
              displayName={character.displayName}
              description={character.description}
              displayIconSmall={character.displayIconSmall}
            />
          ))}
        </div>
      </div>
      {showModal && selectedCharacter && (
        <Modal
          character={selectedCharacter}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};
