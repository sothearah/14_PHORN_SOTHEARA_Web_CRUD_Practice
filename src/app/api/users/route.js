import { NextResponse } from "next/server";
import prisma from "../../../../lip/prisma";

export async function GET() {
  const userData = await prisma.users.findMany();

  return NextResponse.json({
    status: 200,
    message: "GET all user successfully!",
    payload: userData,
  });
}

export async function POST(request) {
  const { name, email } = await request.json();
  const addUser = await prisma.users.create({
    data: {
      name,
      email,
    },
  });

  return NextResponse.json({
    status: 201,
    message: "POST new user successfully!",
    payload: addUser
  });
}
