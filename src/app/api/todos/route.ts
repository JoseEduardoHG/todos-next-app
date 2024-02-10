import { connectDB } from '@/db/connectDB';
import Todo from '@/models/Todo';
import { MongooseError } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const todo = await Todo.create(body);

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
