import { logger } from './logger';

export function createUser(name: string, age: number) {
  if (age < 18) return null;
  
  logger.log(`Käyttäjä ${name} luotiin.`);
  return { id: Math.floor(Math.random() * 1000), name };
}