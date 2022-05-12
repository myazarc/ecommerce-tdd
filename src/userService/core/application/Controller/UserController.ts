import { JsonResponse } from "./../../../../common/utils/JsonResponse";
import { CreateUserCommand } from "./../../../../common/Models/User/CreateUserCommand";
import { Request, Response } from "express";

import { userRepository } from "../Repositories/UserRepository";

import { UserCommandHandler } from "../Features/Commands/UserCommandHandler";
import { DatabaseValidationError } from "../../../../common/Exceptions/DatabaseValidationError";
const userCommandHandler = new UserCommandHandler(userRepository);

export class UserController {
  async createUser(req: Request, res: Response) {
    const result = new JsonResponse();
    try {
      // const userId = await userCommandHandler.createUser(new CreateUserCommand(req.body));
      const userId = await userCommandHandler.createUser(req.body as CreateUserCommand);

      if (userId) {
        result.setSuccess();
        res.status(201);
      } else {
        throw new DatabaseValidationError("Not created user!");
      }
    } catch (error) {
      res.status(400);
      result.setErrorMessage(error.toString());
    } finally {
      res.json(result.getResult());
    }
  }
}
