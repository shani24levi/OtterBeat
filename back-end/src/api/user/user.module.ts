import { User as IUser, UserStatus } from '../../types';
import { client } from '../../sql/client';

class User implements IUser {
  public name: string = '';
  public email: Required<string> = '';
  public password: string | undefined = undefined; //for google login
  public status: UserStatus = UserStatus.Guest;
  constructor() {}

  findById(id: string) {
    client.query(`select * from users where userid='${id}'`, (err, resSQL) => {
      if (!resSQL || err) return err;
      return resSQL.rows;
    });
    console.log(`Hi! I'm ${id}`);
  }
}

export default User;
