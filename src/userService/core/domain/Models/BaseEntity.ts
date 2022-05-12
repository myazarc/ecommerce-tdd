import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public Id?: number;

  @CreateDateColumn()
  public Created_At?: Date;

  @DeleteDateColumn()
  public Deleted_At?: Date;
}
