export class User {
  constructor(
    public id: number = 0,
    public username: string = '',
    public password: string = '',
    public email: string = '',
    public name: string = '',
    public registerDate: Date = new Date(),
    public image: string = '',
  ) {}
}
