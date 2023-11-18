import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
    },
    courses: {
        type: Array,
    },
    enrollment: {
        type: String,
    },
    picture: {
        type: String,
    },
    registrationDate: {
        type: Date,
    },
    career: {
        type: String,
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;