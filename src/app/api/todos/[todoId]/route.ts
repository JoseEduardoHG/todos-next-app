import { connectDB } from '@/db/connectDB';
import Todo from '@/models/Todo';
import { MongooseError } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  context: { params: { todoId: string } },
) {
  try {
    await connectDB();

    const todoId = context.params.todoId;
    const todo = await Todo.findById(todoId);

    return NextResponse.json(
      { status: 'success', data: todo },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof MongooseError)
      return NextResponse.json(
        { status: 'error', message: error.message },
        { status: 400 },
      );

    return NextResponse.json(
      { status: 'error', message: 'Oops! Something went wrong!' },
      { status: 500 },
    );
  }
}
