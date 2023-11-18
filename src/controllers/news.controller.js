import newModel from '../models/new.model.js';

async function getNews(request, response) {
    const page = request.query.page;
  
    const news = await newModel.find({});
  
    return response.send({ news });
}

async function createNew(request, response) {
  try {
    const body = request.body;

    const noticia = await newModel.create({
      title: body.title,
      imageUrl: body.imageUrl,
      body: body.body,
    });

    return response.send({ noticia });
  } catch (error) {
    response.status(500).send({ error });
  }
}



export { createNew , getNews };