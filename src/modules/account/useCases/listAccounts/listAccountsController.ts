import { Request, Response } from 'express';
import { ListAccountsUseCase } from './listAccountsUseCase';

class ListAccountsController {
  constructor(private listCategoriesUseCase: ListAccountsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListAccountsController };
