import express from 'express';
import {
  createUser,
  deleteUser,
  editUser,
  getOneUser,
  getUsers,
} from '../controllers/users.controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userRut', getOneUser);
userRouter.post('/', createUser);
userRouter.delete('/:userRut', deleteUser);
userRouter.put('/:userRut', editUser);

export default userRouter;