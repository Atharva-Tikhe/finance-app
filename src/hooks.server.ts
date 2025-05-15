import type {Handle} from '@sveltejs/kit';
import prisma from '$lib/db';

export const handle: Handle = async ({event, resolve}) => {
    const session = event.cookies.get('uid')
    console.log(session)
    if (session) {
        const user = await prisma.logins.findUnique({where: { uid: Number(session) }})
        if (user) {
            console.log('adding to locals');
            
            // @ts-ignore
            event.locals.user = user;
        }
    }

    return resolve(event); 
}
