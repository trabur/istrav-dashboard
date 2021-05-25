<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../../api'
  
  export let app
  // export let page
  export let slug

  let video

  onMount(async () => {
    M.updateTextFields();

    // fetch video
    let esVideo = await scripts.channel.videos.getOne(app.id, slug)
    console.log('esVideo', esVideo)
    if (esVideo.payload.success === true) {
      video = esVideo.payload.data
      setTimeout(() => M.updateTextFields(), 0)
    } else {
      alert(esVideo.payload.reason)
    }
  })

  function displayDate (at) {
    let d = new Date(at)
    console.log('at', at)
    console.log('d', d)

    return `${d.toLocaleString('default', { month: 'long' })} ${d.getDay()}, ${d.getFullYear()}`
  }
</script>

<svelte:head>
  {#if video}
	  <title>{video.name} - {app.labelName}</title>
  {/if}
</svelte:head>

{#if video}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video controls class="video">
    <source src={`${app.uploads}/${video.video}`}>
  </video>
  <div class="row" style="min-height: 100vh;">
    <div class="col s0 m2"></div>
    <div class="col s12 m8">
      <div class="card">
        <div class="card" style="padding: 1em; overflow: hidden; background-color: #ccc;">
          <button on:click={() => window.history.back()} class="waves-effect btn" style="float: left; margin-right: 0.5em;">⟵ BACK</button>
          <h3 class="path">/{slug}</h3>
          <div style="text-align: right;">
            <!-- <a href={`/${slug}`} class="waves-effect btn right teal" style="margin-right: 1em;" target="_blank"><i class="navicon material-icons">public</i></a> -->
          </div>
        </div>
        <div class="details">
          <h3 class="title">{video.name}</h3>
          <div>{video.viewCount} views • {displayDate(video.createdAt)}</div>
          <br />
          {#if video.contentCreator}
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src={`${app.uploads}/${video.contentCreator.image}`} alt="" class="circle responsive-img">
              </div>
              <div class="col s10">
                <div>Content Creator:</div>
                <h3 style="margin: 0;">{video.contentCreator.username}</h3>
              </div>
            </div>
          {/if}
          <!-- <p>{`${uploads}/${video}`}</p> -->
        </div>
      </div>
    </div>
    <div class="col s0 m2"></div>
  </div>
{/if}

<style>
  .path {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    float: left;
    color: #555;
    line-height: 1.5em;
  }

  .video {
    width: 100%;
  }
  
  .details {
    padding: 1em;
    color: #444;
  }

  .title {
    color: #333;
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
  }
</style>