<script lang="ts">
	import { DownloadURL, UploadTask } from 'sveltefire';

	let file: File | null = null;
	let fileName: string = '';

	function chooseFile(e: Event) {
		if (e.target instanceof HTMLInputElement) {
			const fileInput = e.target;
			if (fileInput.files) {
				file = fileInput.files[0];
				fileName = fileInput.files[0].name;
			}
		}
	}
</script>

<input type="file" on:change={chooseFile} accept="video/mp4" />

{#if file}
	<UploadTask ref={fileName} data={file} let:progress let:snapshot>
		{#if snapshot?.state === 'running'}
			{Math.round(progress)}% uploaded
		{/if}

		{#if snapshot?.state === 'success'}
			<DownloadURL ref={snapshot?.ref} let:link>
				<a href={link} download>Link</a>
			</DownloadURL>
		{/if}
	</UploadTask>
{/if}
