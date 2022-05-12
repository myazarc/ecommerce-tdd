import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
  @Column()
  public Username: string;

  @Column()
  public Password: string;

  @Column()
  public EMail: string;

  @Column("bit", { default: false })
  public EMail_Confirmed: boolean;
}
