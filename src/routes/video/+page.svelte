<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let url = $state(null);
	let loading = $state(false);
	let fileName = $state('audio.mp4');

	async function fetchAudio() {
		loading = true;
		fileName = 'video.mp4';

		const result = await fetch(`/api/getTitle?url=${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'video/mp4'
			}
		});
		fileName = await result.json();

		const res = await fetch(`/api/getVideo?url=${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'video/mp4'
			}
		});
		const arrayBuffer = await res.arrayBuffer();
		const blob = new Blob([arrayBuffer], { type: 'video/mp4' });

		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.download = `${fileName}`;
		downloadLink.click();

		loading = false;
	}
</script>

<div class="">
	<div class="flex flex-col items-center gap-4">
		<p class="g">Please copy the Url to the Youtube-Video into this field:</p>
		<input
			name="url"
			class="input h-12 placeholder:pl-4 placeholder:text-xl placeholder:font-thin placeholder:opacity-50 active:bg-black"
			type="text"
			placeholder="https://youtube.com/watch?v=...."
			bind:value={url}
			autocomplete="off"
		/>
		<button disabled={loading} type="button" class="variant-ghost-surface btn btn-xl" on:click={() => fetchAudio()}>
			<span>Download mp4</span>
		</button>
		{#if loading}
				<ProgressRadial width={'w-16'} stroke={100} />
		{/if}
	</div>
</div>
