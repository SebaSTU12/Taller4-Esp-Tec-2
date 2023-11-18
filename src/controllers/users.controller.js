import userModel from '../models/user.model.js';

async function getUsers(request, response) {
  const page = request.query.page;

  const users = await userModel.find({});

  return response.send({ users });
}

async function getOneUser(request, response) {
  try {
    const userRut = request.params.rut;

    const user = await userModel.findOne(userRut);

    if (!user) {
      return response.status(404).send({ error: 'Usuario no existe' });
    }

    return response.send({ user });
  } catch (error) {
    response.status(500).send({ error });
  }
}

async function createUser(request, response) {
  try {
    const body = request.body;

    const user = await userModel.create({
      name: body.name,
      email: body.email,
      rut: body.rut,
      password: body.password,
      courses: body.courses,
      enrollment: body.enrollment,
      picture: body.picture,
      registrationDate: body.registrationDate,
      career: body.career,
    });

    return response.send({ user });
  } catch (error) {
    response.status(500).send({ error });
  }
}

async function editUser(request, response) {
  const userRut = request.params.rut;

  const body = request.body;

  const user = await userModel.findOneAndUpdate(
    userRut,
    {
      ...body,
    },
    { new: true }
  );

  return response.send({ user });
}


async function deleteUser(request, response) {
  const userRut = request.body.rut;

  await userModel.deleteOne({ rut: userRut });

  return response.send({ success: true });
}

export { getUsers, getOneUser, createUser, editUser, deleteUser };