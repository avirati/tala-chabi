export interface IPassword {
  UID: string;
  name: string;
  login: string;
  notes?: string;
}

export interface IPasswordContainerState {
  saved: IPassword[];
}
