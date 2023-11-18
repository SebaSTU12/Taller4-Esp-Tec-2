import mongoose from 'mongoose';

const newSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,

    },
  },
  { timestamps: true }
);

const newModel = mongoose.model('New', newSchema);

export default newModel;