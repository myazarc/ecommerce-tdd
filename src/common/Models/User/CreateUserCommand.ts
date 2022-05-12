export class CreateUserCommand {
  public Username: string;
  public Password: string;
  public EMail: string;

  constructor(payload: any) {
    this.Username = payload.Username;
    this.Password = payload.Password;
    this.EMail = payload.EMail;
  }

  toPlainObj() {
    return Object.assign({}, this);
  }
}
