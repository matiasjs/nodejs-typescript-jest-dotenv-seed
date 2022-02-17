import express from 'express';
import { users } from './users/users';

const app = express();
const port = process.env.NODE_SERVER_PORT;

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  return console.log(`server is listening ${port}`);
});

export default app;