export interface IMission {
  task: number;
  job: string;
  nav: string;
}

export interface IData {
  navs: INav[];
  missions:IMission[];
}

export interface INav {
  icon: string;
  name: string;
}

export interface IAssigment {
  status: number;
  message: string;
  data: IData;
}
