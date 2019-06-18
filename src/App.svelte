<style lang="postcss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>

<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  import Tutorials from 'svelte-javascript-tutorials';

  let cssStyles = {
    container: 'flex',
    contentContainer: 'w-1/4 flex-col',
    resultContainer: 'flex flex-col',
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
      chapters = [];
      chapters.push({content: marked(data[2]), code: data[1], solution: data[0]})
    })
  })
</script>
<Tutorials {cssStyles} {chapters}/>

