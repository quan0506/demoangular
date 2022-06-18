import {IMail} from "./mail.interface";

export interface ICategory {
  name: string;
  childs: IChild[];
}

export interface IChild {
  name: string;
}

export interface IDataJson {
  status: number;
  message: string;
  data: IData;
}

export interface IData {
  categories: ICategory[];
  mails: IMail[];
}
