<script>
  import { onMount } from 'svelte';

	export let domain
  export let state
  export let slug

  let name = ''
  let video
  let appId
  let uploads
  let token
  let createdAt
  let viewCount
  let contentCreator

  onMount(async () => {
    M.updateTextFields();
    token = localStorage.getItem('token')

    let esOne = await scripts.tenant.apps.getOne(null, domain, state)
    console.log('esOne', esOne)
    if (esOne.payload.success === true) {
      appId = esOne.payload.data.id
      uploads = esOne.payload.data.uploads

      // fetch video
      let esVideo = await scripts.channel.videos.getOne(appId, slug)
      console.log('esVideo', esVideo)
      if (esVideo.payload.success === true) {
        let data = esVideo.payload.data
        name = data.name
        video = data.video
        createdAt = data.createdAt
        viewCount = data.viewCount
        contentCreator = data.contentCreator
        setTimeout(() => M.updateTextFields(), 0)
      } else {
        alert(esVideo.payload.reason)
      }
    } else {
      alert(esOne.payload.reason)
    }
  })

  function displayDate (at) {
    let d = new Date(at)
    console.log('at', at)
    console.log('d', d)

    return `${d.toLocaleString('default', { month: 'long' })} ${d.getDay()}, ${d.getFullYear()}`
  }
</script>

{#if video}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video controls class="video">
    <source src={`${uploads}/${video}`}>
  </video>
{/if}

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
        <h3 class="title">{name}</h3>
        <div>{viewCount} views • {displayDate(createdAt)}</div>
        <br />
        {#if contentCreator}
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src={`${uploads}/${contentCreator.image}`} alt="" class="circle responsive-img">
            </div>
            <div class="col s10">
              <div>Content Creator:</div>
              <h3 style="margin: 0;">{contentCreator.username}</h3>
            </div>
          </div>
        {/if}
        <!-- <p>{`${uploads}/${video}`}</p> -->
      </div>
    </div>
  </div>
  <div class="col s0 m2"></div>
</div>

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