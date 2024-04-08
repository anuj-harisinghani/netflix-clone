import { Prisma, PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;


{/* 
we did this for next js hotloading. to avoid too many prisma instances running, or 
getting warnings about having many instances. making sure that only a single instance is 
working, and opening more instances doesn't cause an issue

prismadb is defined in global.d.ts file
*/}
