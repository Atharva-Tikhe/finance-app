import { json, type RequestHandler } from "@sveltejs/kit";

import {db} from '$lib/db'

export const GET: RequestHandler = ({request}) => {
    return json({message : 'hey'})
}

export const POST: RequestHandler = ({request}) => {
    return request.json()
}