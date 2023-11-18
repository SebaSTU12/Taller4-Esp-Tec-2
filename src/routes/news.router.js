import express from 'express';
import {
  createNew,
  getNews,
} from '../controllers/news.controller.js';

const newRouter = express.Router();

newRouter.post('/', createNew);
newRouter.get('/', getNews);


export default newRouter;