import Card from "./components/Card";
import recipes from "./seed";

function App() {
  return (
    <div className="wrapper">
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

export default App;
