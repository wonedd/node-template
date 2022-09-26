import { Request, Response } from 'express';
import { CreateAccountUseCase } from './CreateAccountUseCase';

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, password } = request.body;

    this.createAccountUseCase.execute({ email, password });

    return response.status(201).send();
  }
}

export { CreateAccountController };
