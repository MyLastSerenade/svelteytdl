<script lang="ts">
	import '../app.pcss';
</script>

<div class="flex w-full flex-col items-center justify-center gap-14 pt-12">
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-500 to-violet-500 box-decoration-clone bg-clip-text text-transparent"
			>Youtube Downloader</span
		>
	</h1>

	<slot />
	<div class="flex flex-row gap-4">
		<a class="anchor" href="/">Home</a>
		<a class="anchor" href="/video">Video</a>
	</div>
</div>
