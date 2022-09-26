import { AccountsRepository } from '@modules/account/repositories/implementations/AccountsRepository';
import { ListAccountsController } from './listAccountsController';
import { ListAccountsUseCase } from './listAccountsUseCase';

const accountRepository = AccountsRepository.getInstance();

const listAccountsUseCase = new ListAccountsUseCase(accountRepository);

const listAccountsController = new ListAccountsController(listAccountsUseCase);

export { listAccountsController };
