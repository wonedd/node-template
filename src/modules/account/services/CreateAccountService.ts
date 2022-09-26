import { IAccountsRepository } from '../repositories/IAccountsRepository';

interface IAccount {
  email: string;
  password: string;
}
class CreateAccountService {
  constructor(private accountsRepository: IAccountsRepository) {}

  execute({ email, password }: IAccount): void {
    const accountAlreadyExists = this.accountsRepository.findByEmail(email);

    if (accountAlreadyExists) {
      throw new Error('Account already exists.');
    }

    this.accountsRepository.create({ email, password });
  }
}

export { CreateAccountService };
