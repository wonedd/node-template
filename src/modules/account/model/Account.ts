import { v4 as uuid } from 'uuid';

class Account {
  id?: string;

  email: string;

  password: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Account };
