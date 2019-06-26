<style lang="postcss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  @import 'highlight.js/styles/github.css';
  :global(.markdown h1) {
    font-size: 2.25rem;
  }
  :global(.markdown h2) {
    font-size: 1.5rem;
  }
  :global(.markdown p) {
    margin-bottom: 2rem;
  }
  :global(.h-half) {
    height: 50vh;
  }
</style>

<script>
  import hljs from 'highlight.js';
  import { onMount } from 'svelte';
  import Tutorials from 'svelte-javascript-tutorials';
  import { getContent } from './tutorialContent.js'

  let cssStyles = {
    container: 'flex h-screen',
    contentContainer: 'w-1/4 flex-col markdown h-screen p-4',
    resultContainer: 'flex flex-col w-3/4 h-screem mt-3',
    viewer: 'mt-4 border mr-2 h-half',
    editor: 'h-half',
    actions: 'mt-4 flex',
    button: {
      default: 'rounded bg-blue-100 p-2'
    }
  }
  let chapters = [
    {
      content: '',
      code: '',
      solution: ''
    }]
  onMount(async () => {
    chapters = await getContent('tutorials/simplest-map', 6)
  })
</script>
<Tutorials {cssStyles} {chapters}/>

