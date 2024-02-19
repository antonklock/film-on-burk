<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import { signInAnonymously } from 'firebase/auth';
	import UploadVideo from '../components/UploadVideo.svelte';
</script>

<h1>Hello world</h1>
<p>I am a paragraph</p>

<SignedIn let:user let:signOut>
	<p>Hello {user.uid}</p>
	<button on:click={signOut}>Sign Out</button>
	<div>
		<UploadVideo />
	</div>
</SignedIn>

<SignedOut let:auth>
	<button on:click={() => signInAnonymously(auth)}>Sign In</button>
</SignedOut>
