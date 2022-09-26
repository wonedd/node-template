import express from 'express';
import { accountsRoutes } from 'routes/accounts.routes';

const app = express();

app.use(express.json());

app.use('/accounts', accountsRoutes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3000!');
});
