import type { RequestHandler } from './$types';
import { getAudio, getVideo } from '$lib/utilsYoutube';
import type { Readable } from 'stream';


export const GET: RequestHandler = async ({ url }) => {
	const ytlink = url.searchParams.get('url');
	const video = await getVideo(String(ytlink));
    const buffer = await streamToBuffer(video);
	return new Response(buffer, {
		headers: {
			'Content-Type': 'video/mp4'
		}
	});
};

async function streamToBuffer(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      
      stream.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });
  
      stream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
  
      stream.on('error', (error: Error) => {
        reject(error);
      });
    });
  }
