import { expect, test, describe, vi, afterEach } from 'vitest';
import { fetchTodo } from './api';

describe('Mocked API', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('fetches successfully and mocks the response', async () => {
    const mockResponse = { userId: 1, id: 1, title: 'mocked title', completed: false };
    
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse
    }));

    const data = await fetchTodo(1);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });
});