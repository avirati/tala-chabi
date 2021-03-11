import { Category } from 'globalConstants';

export interface IPassword {
  UID: string;
  url: string;
  login: string;
  category: Category;
  name?: string;
  notes?: string;
}

export interface IPasswordContainerState {
  saved: IPassword[];
}
