import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User( {
        id: '009',
        role: 'student',
        password: '1234',
        name: {
            firstName: 'Asmaul',
            middleName: 'Husna',
            lastName: 'Runa',
        },
        gender: 'female',
        email: 'abce@mail.com',
        contactNo: '0100000000',
        emergencyContactNo: '01000009',
        presentAddress: 'Dhaka, Bangladesh',
        permanentAddress: 'Rangpur, Bangladesh',
    } );
    await user.save();
    return user;
  };