import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

type MyNum = {
    a : number
    b : number
}

export const POST: RequestHandler = async ({request}) => {
    setTimeout(() => {console.log("waiting...")},200);
    const {a, b} : MyNum = await request.json();
    return json(Number(a) + Number(b))
}

