import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import prisma from '$lib/db';


const regex =  /Sent Rs\.(?<amount>\d+\.\d{2})\s+From (?<from>.+?) Bank.*?\s+To (?<to>.+?)\s+On (?<date>\d{2}\/\d{2}\/\d{2})/s;

export const POST: RequestHandler = async ({request}) => {
    let data : {'amount': String} = await request.json()
    const match = data.amount.match(regex)

    if (match && match.groups) {
        const {amount, from, to, date} = match.groups;
        try {
            const rows = await prisma.transactions.create({data: {
                amount: amount,
                sender: from,
                receiver: to,
                transac_date: date
            }})
            // @ts-ignore
            // const [rows] = await db.execute('INSERT INTO transaction (amount, sender, receiver, transac_date) VALUES (?, ?, ?, ?)', [amount, from, to, date])
            return json({ success: true, message: 'Data inserted successfully', data: rows })
        }catch {
            return json({'error': 'something went wrong'})
        }
        console.log(`the amount was : ${amount}`)
        return json({'metadata': request.headers, 'data': data})
    }else {
        return json({'error': 'no match'})
    }
}

export const GET: RequestHandler = async ({request, params}) => {
    return json({'metadata': request.url, 'others': [params]})
}