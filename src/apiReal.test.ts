import { expect, test } from 'vitest';
import { fetchTodo } from './api';

test('Real API testing: fetches actual data from external API', async () => {
  const data = await fetchTodo(1);
  
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
  expect(typeof data.title).toBe('string');
});