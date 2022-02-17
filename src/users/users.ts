import { v4 } from 'uuid';

export interface User {
  uuid: string;
  name: string;
  surname: string;
  age: number;
}

export const users: User[] = [{uuid: v4(), name: 'Pablo', surname: 'Mármol', age: 30},{uuid: v4(), name: 'Pedro', surname: 'Picapiedra', age: 33}];