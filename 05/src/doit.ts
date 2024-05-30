const todos: TTodo[] = [];

type TTodo = {
  id: number;
  text: string;
  completed: boolean;
};

const addTodo = (text: string): void => {
  const todo: TTodo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(todo);
};

const removeTodo = (id: number): void => {
  const findIndex = todos?.findIndex(todo => todo.id === id);
  todos.splice(findIndex, 1);
};

const toggleTodo = (id: number): void => {
  const find: TTodo | undefined =
    todos?.find(todo => todo.id === id) || undefined;
  if (find === undefined) return;
  find.completed = !find.completed;
};
