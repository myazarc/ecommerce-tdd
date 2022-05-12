import { Repository } from "typeorm";
import { User } from "../../domain/Models/User";
import { getCustomRepository } from "./GenericRepository";

export const userRepository = getCustomRepository(User);
export class UserRepository extends Repository<User> {}
