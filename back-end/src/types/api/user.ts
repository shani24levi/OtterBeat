export enum UserStatus {
  Premium = 'premium',
  Standard = 'standard',
  Guest = 'guest',
}

export interface User {
  name: string;
  email: string;
  password: string | undefined;
  status: UserStatus;
}
