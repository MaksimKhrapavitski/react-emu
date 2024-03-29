import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>      
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;

// import React from 'react';
// import TodoList from './TodoList';
// import AddTodoForm from './AddTodoForm';

// const App = () => {
//   const [todoList, setTodoList] = React.useState([]);

//   const addTodo = (newTodo) => {
//     setTodoList([...todoList, newTodo]);
//   };

//   return (
//     <div>      
//       <h1>Todo List</h1>
//       <AddTodoForm onAddTodo={addTodo}/>
//       <TodoList todoList={todoList} />
//     </div>
//   );
// }

// export default App;