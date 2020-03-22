export class User {
  id: number;
  username: string;
  registerDate: Date;

  constructor(id: number, username: string, registerDate: Date) {
    this.id = id;
    this.username = username;
    this.registerDate = registerDate;
  }
}
