import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/db';


type allRows =  {transactions: [{amount: String, from: String, to:String, date: String }]}

export const load: PageServerLoad = async ({locals}) => {
    // @ts-ignore
    if (!locals.user){
      throw redirect(303, '/')
    } else {
    try {
        const rows = await prisma.transactions.findMany();
        const data: allRows = {transactions: rows}
        return data

      } catch (error) {
        console.error(error);
        return {
          transactions: ''
        };
      }
    }
} 