import { User as IUser, UserStatus } from '../../types';

class User implements IUser {
  public name: string = '';
  public email: Required<string> = '';
  public password: string | undefined = undefined; //for google login
  public status: UserStatus = UserStatus.Guest;

  constructor(name: string, email: Required<string>, password: string | undefined, status: UserStatus) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = status;
  }
}

export default User;
