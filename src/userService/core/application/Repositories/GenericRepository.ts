import { appDataSource } from "../../../../common/context/db.context";
import { EntityTarget } from "typeorm";

export function getCustomRepository<T>(TEntity: EntityTarget<T>) {
  return appDataSource.getRepository<T>(TEntity);
}
