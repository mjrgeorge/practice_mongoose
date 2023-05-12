import mongoose from 'mongoose';
import app from './app';
const port: number = 5000;

// DATABASE CONNECTION
async function bootstrap() {
  try {
    await mongoose.connect( 'mongodb://127.0.0.1:27017/practice_mongoose' );
    console.log( 'Database connection successfully completed!' );
    app.listen( port, () => {
      console.log( `Server is listening on port: http://localhost:${port}` )
    } );
  } catch ( err ) {
    console.log( 'Failed to connect database!', err );
  };
};
bootstrap();

