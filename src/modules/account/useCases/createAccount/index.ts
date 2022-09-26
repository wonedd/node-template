import { AccountsRepository } from '../../repositories/implementations/AccountsRepository';
import { CreateAccountController } from './CreateAccountController';
import { CreateAccountUseCase } from './CreateAccountUseCase';

const accountRepository = AccountsRepository.getInstance();

const createAccountUseCase = new CreateAccountUseCase(accountRepository);

const createAccountController = new CreateAccountController(
  createAccountUseCase,
);
export { createAccountController };
