import { PrismaClient } from "../src/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const prisma = new PrismaClient({ adapter });
// export default prisma;

const userData = [
  {
    name: "Nayeon",
    email: "nayeon@gmail.com",
  },
  {
    name: "Sana",
    email: "sana@gmail.com",
  },
  {
    name: "Mina",
    email: "mina@gmail.com",
  },
];

async function addUser() {
    for (const u of userData) {
        await prisma.users.create({ data : u });
    }
}

addUser();

// addUser()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
