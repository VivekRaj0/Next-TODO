import { prisma } from "@/lib/prisma";
import { createTodo } from "./action";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <h1>Todos</h1>
      <form action={createTodo}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="date" name="dueDate" required />
        <button type="submit">Create</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}