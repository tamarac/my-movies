import { Header } from "./components/Header";
import { MainMenu } from "./components/MainMenu";
import { MoviesList } from "./components/MoviesList"

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;
