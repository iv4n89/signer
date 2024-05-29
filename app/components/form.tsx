import { capitalizeFirstLetter, capitalizeOnlyFirstLetter } from "../lib/utils";

interface Props {
  onChangeFallback: React.SetStateAction<any>;
}

export const Form = ({ onChangeFallback }: Props) => {
  return (
    <div className="flex flex-col w-full gap-10 items-center pb-10 formContainer">
      <div className="flex flex-col w-full">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          onChange={(e) =>
            onChangeFallback((imageData) => ({
              ...imageData,
              name: capitalizeFirstLetter(e.target.value),
            }))
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="position">Posicion</label>
        <input
          type="text"
          id="position"
          onChange={(e) =>
            onChangeFallback((imageData) => ({
              ...imageData,
              position: capitalizeOnlyFirstLetter(e.target.value),
            }))
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="department">Departamento</label>
        <input
          type="text"
          id="department"
          onChange={(e) =>
            onChangeFallback((imageData) => ({
              ...imageData,
              department: capitalizeOnlyFirstLetter(e.target.value),
            }))
          }
        />
      </div>
    </div>
  );
};
