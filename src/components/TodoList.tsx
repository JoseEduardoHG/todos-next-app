type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const todos: Todo[] = [];

  return (
    <section>
      {todos.map((todo) => (
        <div role='row' key={todo.id}>
          {todo.text}
        </div>
      ))}
    </section>
  );
}
