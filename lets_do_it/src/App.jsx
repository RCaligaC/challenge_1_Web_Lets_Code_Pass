import './App.css';
import Header from './components/Header';

function App() {
  return (
  <>
    <Header />;

    <section id="todo-list">
      <h2>Minhas tarefas</h2>

      <form>
        <input type="text" />
        <button>Adicionar</button>
      </form>
    </section>
  </>
  );
}

export default App;
