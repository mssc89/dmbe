export class User {
  id: number;
  username: string;
  email: string;
  name: string;
  registerDate: Date;

  constructor(id: number, username: string, email: string, name: string, registerDate: Date) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.name = name;
    this.registerDate = registerDate;
  }
}
