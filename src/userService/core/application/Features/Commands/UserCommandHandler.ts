import { User } from "./../../../domain/Models/User";
import { CreateUserCommand } from "src/common/Models/User/CreateUserCommand";
import { UserRepository } from "../../Repositories/UserRepository";

export class UserCommandHandler {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(request: CreateUserCommand): Promise<number> {
    //use validation

    //check exist username

    //check email existname
    // ? add automapper
    const userDto = new User();
    userDto.EMail = request.EMail;
    userDto.EMail_Confirmed = false;
    userDto.Username = request.Username;
    userDto.Password = request.Password;
    const user = await this.userRepository.save(userDto);
    return user.Id as number;
  }
}
