import { User } from "./../../userService/core/domain/Models/User";
import { CreateUserCommand } from "../Models/User/CreateUserCommand";
import { createMapper, createMap } from "@automapper/core";
import { classes } from "@automapper/classes";

export const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(mapper, CreateUserCommand, User);
