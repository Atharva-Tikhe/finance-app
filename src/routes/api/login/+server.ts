import {json, type RequestHandler} from "@sveltejs/kit";
import {db} from '$lib/db';


export const POST: RequestHandler = ({request}) => {
    console.log(request.formData)
    return json({something : 'else'})
}