import { Account } from '../model/Account';
import { IAccountsRepository, ICreateAccountDTO } from './IAccountsRepository';

class AccountsRepository implements IAccountsRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  create({ email, password }: ICreateAccountDTO): void {
    const account = new Account();

    Object.assign(account, {
      email,
      password,
      created_at: new Date(),
    });

    this.accounts.push(account);
  }

  list(): Account[] {
    return this.accounts;
  }

  findByEmail(email: string): Account {
    const account = this.accounts.find(a => a.email === email);
    return account;
  }
}

export { AccountsRepository };
