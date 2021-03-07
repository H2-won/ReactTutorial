import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate.js';
import TodoHead from './components/TodoHead.js';
import TodoList from './components/TodoList.js';
import TodoTemplate from './components/TodoTemplate.js';
import { TodoProvider } from './TodoContext.js';
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
