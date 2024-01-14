<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { progression } from '$lib/store';
	import { json, type SubmitFunction } from '@sveltejs/kit';
	import Loading from '../components/Loading.svelte';

	let url = $state(null);
	let show = $state(false);
	let loading = $state(false);
	let fileName = $state('audio.mp3');


	async function fetchAudio() {
		loading = true
		fileName = 'audio.mp3';
		
		const res = await fetch(`/api/getAudioFile?url=${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'audio/mpeg'
			}
		});
		const arrayBuffer = await res.arrayBuffer();
		const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });

		// Create a download link
		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.download = `${fileName}`;

		// Trigger a click on the link to start the download
		downloadLink.click();
		loading = false
	}

	// https://www.youtube.com/watch?v=kFU7nRe7C0A
</script>


<div class="relative pt-12">
	<div class="absolute left-[20%] z-10 h-[240px] w-[240px] rounded-full bg-purple-600 blur-3xl" />
	<div class="relative z-20 flex max-w-[400px] flex-col items-center gap-4">
		<p class="text-center text-lg">Please copy the Url to the Youtube-Video into this field:</p>
		<input
			name="url"
			class="form-field"
			type="text"
			placeholder="URL"
			bind:value={url}
			
		/>
		<!-- on:input={(event) => changeUrl(event)} -->
		<button
			type="button"
			class="w-[120px] rounded-lg border-2 border-gray-100 bg-transparent text-lg text-white"
			on:click={() => fetchAudio()}
			>Send it...</button
		>
		{#if loading}
			<div class="mr-6 h-[50px] w-[50px]">
				<Loading />
			</div>
		{/if}
	</div>
</div>

<style>
	.form-field {
		@apply box-border max-h-[50px] min-w-[300px] max-w-[320px] rounded-md border border-gray-100 bg-black font-thin text-cyan-400;
	}
</style>
