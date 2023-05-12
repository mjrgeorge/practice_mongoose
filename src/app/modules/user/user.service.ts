import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersFrommDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
  };

export const createUserToDB = async (payload: IUser):Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    return user;
  };
