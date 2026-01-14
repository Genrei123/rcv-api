import dotenv from 'dotenv';
import setUpApp from './setUpApp';
import { redisService } from './services/redisService';

dotenv.config();
const { PORT } = process.env;

const initializeApp = async () => {
  const app = await setUpApp();

  // Initialize Redis connection
  // await redisService.connect();

  app.listen(PORT || 3000, () =>
    console.log('Server is running on port: ', PORT)    
  );
};

initializeApp();
