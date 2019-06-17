<script>
	import { onMount } from 'svelte';
	import marked from 'marked';
	import Tutorials from 'svelte-javascript-tutorials';
	let chapters = [
		{
			content: marked('# Welcome to this Tutorial'),
			code: '',
			solution: 'document.innerHTML = "Welcome";'
		}]
	onMount(() => {
		const urls = [
			'tutorials/1/solution.js',
			'tutorials/1/code.js',
			'tutorials/1/content.md',
		];

		// use map() to perform a fetch and handle the response for each url
		Promise.all(urls.map(url =>
			fetch(url)
			.then((response) => response.text())
			.catch((e) => {
				console.error(e)
			})
		))
		.then(data => {
			chapters.push({content: marked(data[2]), code: data[1], solution: data[0]})
		})
	})
</script>
<Tutorials chapters={chapters}/>

