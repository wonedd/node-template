import { createAccountController } from '@modules/account/useCases/createAccount';
import { listAccountsController } from '@modules/account/useCases/listAccounts';
import { Router } from 'express';

const accountsRoutes = Router();

accountsRoutes.post('/', (request, response) => {
  return createAccountController.handle(request, response);
});

accountsRoutes.get('/', (request, response) => {
  return listAccountsController.handle(request, response);
});

export { accountsRoutes };
