import { IAccountsRepository } from '../../repositories/IAccountsRepository';

interface IRequest {
  email: string;
  password: string;
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {}

  execute({ email, password }: IRequest): void {
    const accountAlreadyExists = this.accountRepository.findByEmail(email);

    if (accountAlreadyExists) {
      throw new Error('Account already exists.');
    }

    this.accountRepository.create({ email, password });
  }
}

export { CreateAccountUseCase };
