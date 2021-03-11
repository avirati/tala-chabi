export enum Category {
  BUSINESS        = 'Business',
  CAREER          = 'Career',
  ENTERTAINMENT   = 'Entertainment',
  FINANCE         = 'Finance',
  HEALTH          = 'Health',
  NEWS            = 'News',
  OTHER           = 'Other',
  REAL_ESTATE     = 'Real Estate',
  SHOPPING        = 'Shopping',
  SOCIAL_MEDIA    = 'Social Media',
  TECH            = 'Tech',
  TRAVEL          = 'Travel',
}

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
