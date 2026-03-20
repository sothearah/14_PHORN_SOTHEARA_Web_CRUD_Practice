import { NextResponse } from "next/server";
import prisma from "../../../../../lip/prisma";

// params must come with s
// GET by ID
export async function GET(_, { params }) {
  const { id } = await params;
  const user = await prisma.users.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({
    status: 200,
    message: `GET user id: ${id} successfully!`,
    payload: user,
  });
}

// DELETE by ID
export async function DELETE(_, { params }) {
  const { id } = await params;
  await prisma.users.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({
    status: 200,
    message: `Delete user id: ${id} deleted successfully!`,
    // payload:
  });
}

// PUT by Id
export async function PUT(request, { params }) {
  const { name, email } = await request.json();
  const { id } = await params;
  const updateUser = await prisma.users.update({
    data: { name, email },
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({
    status: 200,
    message: `UPDATE user id: ${id} successfully!`,
    payload: updateUser,
  });
}
