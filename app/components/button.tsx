interface Props {
  onClickFallback: () => void;
}

export const Button = ({ onClickFallback }: Props) => {
  return (
    <button
      onClick={() => onClickFallback()}
      className="border border-sky-500 px-36 py-2 rounded-3xl text-2xl hover:bg-sky-500 transition-all duration-300 ease-in-out mb-4"
    >
      Generar y Descargar Firma
    </button>
  );
};
