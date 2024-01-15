<script lang="ts">
	import Loading from '../components/Loading.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let url = $state(null);
	let loading = $state(false);
	let fileName = $state('audio.mp3');

	async function fetchAudio() {
		loading = true;
		fileName = 'audio.mp3';

		const res = await fetch(`/api/getAudioFile?url=${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'audio/mpeg'
			}
		});
		const arrayBuffer = await res.arrayBuffer();
		const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });

		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.download = `${fileName}`;
		downloadLink.click();

		loading = false;
	}

	// https://www.youtube.com/watch?v=kFU7nRe7C0A
</script>

<div class="">
	<div class="flex flex-col items-center gap-2">
		<p class="g">Please copy the Url to the Youtube-Video into this field:</p>
		<input name="url" class="input" type="text" placeholder="URL" bind:value={url} />
		<button type="button" class="variant-ghost-surface btn" on:click={() => fetchAudio()}>
			<span>Send it...</span>
		</button>
		{#if !loading}
			<div class="">
				<ProgressRadial width={"w-24"}/>
			</div>
		{/if}
	</div>
</div>

<style>
	.form-field {
		@apply box-border max-h-[50px] min-w-[300px] max-w-[320px] rounded-md border border-gray-100 bg-black font-thin text-cyan-400;
	}
</style>
