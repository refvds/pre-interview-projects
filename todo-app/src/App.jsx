import './App.css';
import { AddButton } from './components/AddButton';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <header>
        <TaskInput />
        <AddButton />
      </header>
      <TaskList />
    </>
  );
}

export default App;
