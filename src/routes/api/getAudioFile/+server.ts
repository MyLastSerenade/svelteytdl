import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { getAudio } from "$lib";


export const GET: RequestHandler = async ({ url }) => {
    const a = url.searchParams.get('url')
    const audioBuffer = await getAudio(String(a));
    const arrayBuffer = audioBuffer?.buffer;
    return new Response(arrayBuffer, {
        headers: {
            'Content-Type': 'audio/mpeg',
        },
    });
}
