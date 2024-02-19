<script lang="ts">
	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { firebaseConfig, storage } from '$lib/firebase';

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	// const firestore = getFirestore(app);
	const auth = getAuth(app);
</script>

<FirebaseApp {auth} {storage}>
	<slot />
</FirebaseApp>
