import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/db';


type allRows =  {transactions: [{amount: String, from: String, to:String, date: String }]}

export const load: PageServerLoad = async () => {
    try {
        const rows = await prisma.transaction.findMany();
        const data: allRows = {transactions: rows}
        return data

      } catch (error) {
        console.error(error);
        return {
          transactions: ''
        };
      }

    error(404, 'Not found!')
} 