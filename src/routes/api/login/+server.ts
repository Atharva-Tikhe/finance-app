import {json, redirect, type RequestHandler} from "@sveltejs/kit";
// import {db} from '$lib/db';
import prisma from '$lib/db'

import bcrypt from "bcryptjs";

export const POST: RequestHandler = async ({request, cookies}) => {
    const req = await request.formData()
    const username = req.get('username') as string
    const password = req.get('password') as string

    if (!username || !password) {
        return json({ error: 'Missing credentials' }, { status: 400 });
    }

    const user = await prisma.logins.findUnique({where: {username}})

    if (!user) {
        return json({error: 'Usernmae not found'}, {status: 400})
    }

    if (bcrypt.compareSync(password, user.pass)) {
        console.log(`from login : ${user.uid} -- ${user}`)
        cookies.set('uid', user.uid, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            // secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7 // 1 week
          });
        throw redirect(303, '/view')
    } else {
        return json({error: 'wrong password'}, {status: 400})
    }



}