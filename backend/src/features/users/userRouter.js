import express from 'express';
import userController from './controllers/usercontroller.js';

const userRouter = express.Router();
userRouter.post('/signup',userController.createUser);
userRouter.post('/login',userController.signinUser);
userRouter.get('/user',userController.getUser);


export default userRouter;
