import { Account } from '../model/Account';

interface ICreateAccountDTO {
  email: string;
  password: string;
}

interface IAccountsRepository {
  create({ email, password }: ICreateAccountDTO): void;
  list(): Account[];
  findByEmail(email: string): Account;
}

export { IAccountsRepository, ICreateAccountDTO };
