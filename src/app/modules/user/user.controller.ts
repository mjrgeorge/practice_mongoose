import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFrommDB } from "./user.service";
import { IUser } from "./user.interface";

export const getUsers = async ( req: Request, res: Response, next: NextFunction ) => {
    const users = await getUsersFrommDB();
    
    res.status(200).json({
        status: 'success',
        data: users,
    });
};

export const getUserById = async ( req: Request, res: Response, next: NextFunction ) => {
    const {id} = req.params;
    const users = await getUserByIdFromDB(id);
    
    res.status(200).json({
        status: 'success',
        data: users,
    });
};

export const createUser = async ( req: Request, res: Response, next: NextFunction ) => {
    const data = req.body;
    const user = await createUserToDB(data);

    res.status(200).json({
        status: 'success',
        data: user,
    });
};

