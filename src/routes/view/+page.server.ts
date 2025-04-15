import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const test = {'message': 'hi', 'name': 'atharva'};
    if (test.name === "atharva") {
        return test
    }

    error(404, 'Not found!')
} 