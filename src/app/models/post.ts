export class Post {
  id: number;
  title: string;
  content: string;
  createDate: Date;

  constructor(id: number, title: string, content: string, createDate: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createDate = createDate;
  }
}
