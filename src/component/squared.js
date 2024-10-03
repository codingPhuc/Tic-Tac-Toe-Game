export default function Spuared({ value, setSpuared }) {
  return (
    <button className="square" onClick={setSpuared}>
            {value}   {" "}
    </button>
  );
}
