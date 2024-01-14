import { getAudio } from '$lib';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const url = data.get('url');
        const a = url
        console.log(String(a))
        const audioBuffer = await getAudio(String(a));
        const arrayBuffer = audioBuffer?.buffer;
        return new Response(arrayBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
            },
        });
   /*      return {data: audioBuffer} */
    },
}