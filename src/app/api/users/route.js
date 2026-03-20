import { NextResponse } from "next/server";
import prisma from "../../../../lip/prisma";

// GET method
export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const userData = await prisma.users.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });

  return NextResponse.json({
    status: 200,
    message: "GET all user successfully!",
    payload: userData,
  });
}

// POST method
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
    payload: addUser,
  });
}
