import { useRef } from "react";
interface Character {
  uuid: string;
  displayName: string;
  description: string;
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

interface ModalComponentProps {
  character: Character;
  onClose: () => void;
}

export const Modal: React.FC<ModalComponentProps> = ({
  character,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="absolute w-3/4 h-3/4 z-10 bg-rose-700 overflow-auto text-white p-6 rounded-lg">
        <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <div className="flex-col sm:flex md:flex-row md:items-center">

          <div className="w-4/4 sm:w-2/4 flex justify-center items-center">
            <div className=" h-100 relative flex items-center justify-center flex-col mb-2 w-4/4">
              <div
                className="h-70 w-full bg-cover bg-center sm:h-100"
                style={{ backgroundImage: `url('${character.background}')` }}
              >
                <img className=" h-70 sm:h-100" src={character.fullPortrait} alt="" />
              </div>
            </div>

          </div>

          <div className=" w-4/4  md:w-3/4">
            <h2 className="text-2xl font-bold mb-4">{character.displayName}</h2>

            <p>{character.description} </p>
          </div>
        </div>

        <div className="w-full flex-col w-4/4 ">
          <p className="flex gap-4 items-center mt-2">
            <p className="font-bold "> Função: </p> {character.role.displayName}
            <img className="size-5" src={character.role.displayIcon} alt="" />
          </p>

          <p className="gap-4 items-center">
            <p className="font-bold mt-2"> Habilidades: </p>
            {character.abilities.map((abilities, index) => (
              <div className="m-2">
                <p key={index} className="font-bold  flex gap-2 items-center ">
                {abilities.displayName}:
                <img className="size-7" src={abilities.displayIcon} alt="" />
                </p>
                <p className="w-4/4 my-1">{abilities.description}</p>
              </div>
              
              
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
