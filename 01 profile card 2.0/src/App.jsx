import Card from "./components/Card";
import { useContext } from "react";
import { cardContext } from "./Context";

const App = () => {
  const data = useContext(cardContext);

  return (
    <div className="main">
      <div className="heading">
        <h1>ANIME</h1>
        <h3>VAULT</h3>
      </div>

      <div className="app-cards">
        {data.map((e, idx) => {
          return (
            <Card key={idx} name={e.name} skill={e.skill} image={e.image} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
