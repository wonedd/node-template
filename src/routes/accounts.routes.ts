import { AccountsRepository } from '@modules/account/repositories/AccountsRepository';
import { CreateAccountService } from '@modules/account/services/CreateAccountService';
import { Router } from 'express';

const accountsRoutes = Router();

const accountsRepository = new AccountsRepository();

accountsRoutes.post('/', (request, response) => {
  const { email, password } = request.body;

  const createAccountService = new CreateAccountService(accountsRepository);

  createAccountService.execute({ email, password });

  return response.status(201).send();
});

accountsRoutes.get('/', (request, response) => {
  const all = accountsRepository.list();

  return response.json(all);
});

export { accountsRoutes };
