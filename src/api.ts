export async function fetchTodo(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) throw new Error('API Error');
  return response.json();
}