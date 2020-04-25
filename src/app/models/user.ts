export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  registerDate: Date;

  constructor(id: number, username: string, password: string, email: string, name: string, registerDate: Date) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.registerDate = registerDate;
  }
}
