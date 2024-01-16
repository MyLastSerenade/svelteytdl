import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmppegPath from '@ffmpeg-installer/ffmpeg';
import { Writable } from 'stream';

export async function getAudio(url: string) {
	let title = '';
	if (ffmppegPath.path) {
		ffmpeg.setFfmpegPath(ffmppegPath.path);
		let stream = ytdl(String(url), { filter: 'audioonly' });
		title = (await ytdl.getBasicInfo(String(url))).videoDetails.title.replaceAll('"', '');

		const chunks: Buffer[] = [];

		await new Promise<void>((resolve, reject) => {
			const ffmpegProcess = ffmpeg(stream)
				.audioBitrate(128)
				.toFormat('mp3')
				.on('progress', (p) => {
					process.stdout.write(`${p.targetSize}kb downloaded`);
				})
				.on('end', () => {
					console.log(`\ndone`);
					resolve();
				})
				.on('error', (err) => {
					console.error('Error during processing:', err);
					reject(err);
				})
				.pipe(
					new Writable({
						write(chunk, encoding, callback) {
							chunks.push(chunk);
							callback();
						},
						final(callback) {
							callback();
						}
					})
				);

			ffmpegProcess.on('error', (err) => {
				console.error('Error during ffmpeg processing:', err);
				reject(err);
			});
		});

		return Buffer.concat(chunks);
	}

	return null;
}
