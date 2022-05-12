import { User } from "./../../../domain/Models/User";
import { CreateUserCommand } from "../../../../../common/Models/User/CreateUserCommand";
import { UserRepository } from "../../Repositories/UserRepository";
import { mapper } from "../../../../../common/Mappings/Mapper";

export class UserCommandHandler {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(request: CreateUserCommand): Promise<number> {
    //use validation

    //check exist username

    //check email existname
    const userDto = mapper.map(request, CreateUserCommand, User);

    const user = await this.userRepository.save(userDto);
    return user.Id as number;
  }
}
