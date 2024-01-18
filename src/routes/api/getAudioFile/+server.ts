import type { RequestHandler } from './$types';
import { getAudio } from '$lib/utilsYoutube';

export const GET: RequestHandler = async ({ url }) => {
	const ytlink = url.searchParams.get('url');
	const audioBuffer = await getAudio(String(ytlink));
	const arrayBuffer = audioBuffer?.buffer;
	return new Response(arrayBuffer, {
		headers: {
			'Content-Type': 'audio/mpeg'
		}
	});
};
