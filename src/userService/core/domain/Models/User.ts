import { AutoMap } from "@automapper/classes";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
  @AutoMap()
  @Column()
  public Username: string;

  @AutoMap()
  @Column()
  public Password: string;

  @AutoMap()
  @Column()
  public EMail: string;

  @Column("bit", { default: false })
  public EMail_Confirmed: boolean;
}
