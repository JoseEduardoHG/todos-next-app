import { createModel } from '@/lib/createModel';
import { Schema } from 'mongoose';

interface Todo {
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new Schema<Todo>(
  {
    title: {
      type: String,
      required: true,
      maxlength: [
        200,
        'The value of `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).',
      ],
      minlength: [
        3,
        'The value of `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).',
      ],
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

export default createModel('Todo', todoSchema);
