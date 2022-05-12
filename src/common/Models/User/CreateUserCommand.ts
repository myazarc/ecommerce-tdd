import { AutoMap } from "@automapper/classes";
export class CreateUserCommand {
  @AutoMap()
  public Username: string;
  @AutoMap()
  public Password: string;
  @AutoMap()
  public EMail: string;

  toPlainObj() {
    return Object.assign({}, this);
  }
}
