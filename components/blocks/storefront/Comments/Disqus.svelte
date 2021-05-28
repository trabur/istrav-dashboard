<script>
  import { onMount } from 'svelte'

  export let disqusId
  export let pageId

  onMount(() => {
    var disqus_config = function () {
      this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = pageId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = `https://${disqusId}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  })
</script>
<div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>