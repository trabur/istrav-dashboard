<script>
  import { onMount } from 'svelte'

  export let measurementId

  onMount(() => {
    // <!-- Global site tag (gtag.js) - Google Analytics -->
    ;(function() {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      // s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', measurementId);
  })
</script>
