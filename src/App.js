import Header from "./components/Header";
import TextField from "./components/TextField";
import TodoCard from "./components/TodoCard";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <Header />
      <section style={{ width: "50%", margin: "auto" }}>
        <Title />
        <TextField />
        <TodoCard />
      </section>
    </div>
  );
};

export default App;
