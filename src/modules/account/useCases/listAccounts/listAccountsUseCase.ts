import { Account } from '@modules/account/model/Account';
import { IAccountsRepository } from '@modules/account/repositories/IAccountsRepository';

class ListAccountsUseCase {
  constructor(private accountsRepository: IAccountsRepository) {}

  execute(): Account[] {
    const categories = this.accountsRepository.list();

    return categories;
  }
}

export { ListAccountsUseCase };
