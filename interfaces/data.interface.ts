export interface Child {
  name: string;
}
export interface Categories {
  name: string;
  child: Child[];
}
export interface Mail {
  subject: string;
  content: string;
  email: string;
  category: string;
  child: string;
}
export interface IData {
  categories: Categories[];
  mail: Mail[];
}
