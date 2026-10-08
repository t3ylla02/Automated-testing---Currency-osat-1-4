import { expect, test, describe, vi, afterEach } from 'vitest';
import { createUser } from './user';
import { logger } from './logger';

describe('createUser', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('Spying: tarkkailee loggeria', () => {
    const spy = vi.spyOn(logger, 'log');
    createUser('Matti', 25);
    expect(spy).toHaveBeenCalledWith('Käyttäjä Matti luotiin.');
  });

  test('Stubbing: estää alkuperäisen konsolitulosteen', () => {
    const stub = vi.spyOn(logger, 'log').mockImplementation(() => {});
    createUser('Maija', 30);
    expect(stub).toHaveBeenCalledOnce();
  });

  test('Mocking: poistaa satunnaisuuden (Math.random)', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    vi.spyOn(logger, 'log').mockImplementation(() => {});
    
    const user = createUser('Lassi', 22);
    expect(user).toEqual({ id: 500, name: 'Lassi' });
  });
});