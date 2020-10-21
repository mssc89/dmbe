export class Post {
  constructor(
    public id: number = 0,
    public title: string = '',
    public content: string = '',
    public createDate: Date = new Date(),
    public image: string = '',
  ) {}
}
