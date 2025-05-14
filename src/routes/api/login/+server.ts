import {json, redirect, type RequestHandler} from "@sveltejs/kit";
// import {db} from '$lib/db';
import prisma from '$lib/db'

import bcrypt from "bcryptjs";

export const POST: RequestHandler = async ({request}) => {
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
        throw redirect(303, '/view')
    } else {
        return json({error: 'wrong password'}, {status: 400})
    }

}