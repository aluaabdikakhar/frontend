import {Book} from './book';

export interface User {
  id: number;
  mail: string;
  password: string;
  books: Book[];
}
