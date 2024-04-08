import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method != 'POST') {
        return res.status(405).end();
    }
    
    // setting up a try block to check for existing users and catching errors with registering
    try {
        const {email, name, password} = req.body;

        // check if the entered email id already exists in the database
        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            return res.status(422).json({error: 'Email taken'});
        }

        // otherwise, create a new user with the entered email and password
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        return res.status(200).json(user);

    } catch(error) {
        console.log(error);
        return res.status(400).end();
    }

}