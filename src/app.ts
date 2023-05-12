import cors from 'cors';
import express, { Application, NextFunction, Request, Response, urlencoded } from 'express';
import { Schema, model } from 'mongoose';

const app: Application = express()

// USING CORS
app.use( cors() );

// PARSE DATA
app.use( express.json() );
app.use( urlencoded( { extended: true } ) );

app.get( '/', ( req: Request, res: Response, next: NextFunction ) => {
  // INSERTING A TEST DATA INTO MONGODB
  // 1. Create an interface representing a document in MongoDB.
  interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  };

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>( {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  } );

  // 3. Create a Model.
  const User = model<IUser>('User', userSchema);

  // 4. Connect to MongoDB
  const createUserToDB = async () => {
    const user = new User({
      id: '008',
      role: 'student',
      password: '1234',
      name: {
        firstName: 'Hello',
        lastName: 'World',
      },
      gender: 'male',
      email: 'abce@mail.com',
      contactNo: '0100000000',
      emergencyContactNo: '01000009',
      presentAddress: 'Dhaka, Bangladesh',
      permanentAddress: 'Rangpur, Bangladesh',
    });
    await user.save();
  
    console.log(user);
  };
  createUserToDB();
} );

export default app;