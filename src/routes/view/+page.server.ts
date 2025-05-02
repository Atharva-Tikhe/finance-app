import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {db} from '$lib/db';

export const load: PageServerLoad = async () => {
    try {
        // @ts-ignore
        const rows = await db.query('SELECT * FROM transaction ORDER BY transac_date DESC');
        return {transactions : rows[0]}

      } catch (error) {
        console.error(error);
        return {
          transactions: []
        };
      }

    error(404, 'Not found!')
} 