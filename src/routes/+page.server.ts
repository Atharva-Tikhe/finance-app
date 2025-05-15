import { fail, redirect, type Actions } from '@sveltejs/kit';
import prisma from '$lib/db';
import bcrypt from 'bcryptjs';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const req = await request.formData();
    const username = req.get('username') as string;
    const password = req.get('password') as string;

    if (!username || !password) {
      return fail(400, { error: 'Missing credentials' });
    }

    const user = await prisma.logins.findUnique({ where: { username } });

    if (!user) {
      return fail(400, { error: 'Username not found' });
    }

    if (!bcrypt.compareSync(password, user.pass)) {
      return fail(400, { error: 'Wrong password' });
    }

    cookies.set('uid', user.uid, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    //   secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7
    });


    throw redirect(303, '/view');
  }
};
