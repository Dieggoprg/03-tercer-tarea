import { useCounter } from "./Hooks/Counter";
import { useFetch } from "./Hooks/useFetch";
import { CharactersInfo } from "./Components/CharactersInfo";
import { Loading } from "./Components/Loading";
import "./App.css";

export const App = () => {
  const { counter, handleIncrement, handleDecrement } = useCounter(1);
  const { data, isLoading, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${counter}`
  );

  console.log(data)
  return (
    <>
    <div className="app-container">
      <h1>LOS SIMPSONS <strong>API</strong> - by Garcia Diego -</h1>

      {isLoading && <Loading />}
      {error && <p className="error">{error}</p>}

      {data && <CharactersInfo character={data} />}

      <div className="buttons">
        <button onClick={handleDecrement} disabled={counter === 1}>
         - Anterior -
        </button>
        <button onClick={handleIncrement}>- Siguiente -</button>
      </div>
    </div>
    </>
  );
};
