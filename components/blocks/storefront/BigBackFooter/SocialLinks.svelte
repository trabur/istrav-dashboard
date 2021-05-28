<script>
  export let share

  let json = JSON.parse(share)
</script>

{#if json}
  <ul class="right hide-on-med-and-down" style="margin-top: 0.3em;">
    {#if json.instagram}
      <li><a href={json.instagram} target="_blank" data-target="slide-out"><i class="material-icons">camera_alt</i></a></li>
    {/if}
    {#if json.facebook}
      <li><a href={json.facebook} target="_blank" data-target="slide-out"><i class="material-icons">facebook</i></a></li>
    {/if}
    {#if json.youtube}
      <li><a href={json.youtube} target="_blank" data-target="slide-out"><i class="material-icons">videocam</i></a></li>
    {/if}
    {#if json.twitter}
      <li><a href={json.twitter} target="_blank" data-target="slide-out"><i class="material-icons">forum</i></a></li>
    {/if}
  </ul>
{/if}