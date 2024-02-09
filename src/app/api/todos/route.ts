import { connectDB } from '@/db/connectDB';
import Todo from '@/models/Todo';
import { MongooseError } from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const todos = await Todo.find();

    return NextResponse.json(
      { status: 'success', data: todos },
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
