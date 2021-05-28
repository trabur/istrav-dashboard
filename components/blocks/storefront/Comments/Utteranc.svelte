<script>
  import { onMount } from 'svelte'

  export let utterancRepoId
  export let pathname

  // onMount(() => {
  // })
</script>

<script src="https://utteranc.es/client.js"
  repo={utterancRepoId}
  issue-term={pathname}
  theme="github-light"
  crossorigin="anonymous"
  async>
</script>