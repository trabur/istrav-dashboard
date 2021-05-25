<script>
	import { onMount } from "svelte";

  import { istrav, scripts } from '../../../api'

  export let app
  // export let page
	let guides

	onMount(async () => {
    let esGuides = await scripts.channel.guides.getAll(app.id)
    if (esGuides.payload.success === true) {
      guides = esGuides.payload.data
    } else {
      alert(esGuides.payload.reason)
    }

		// grab guide videos
		guides.forEach(async (guide, index) => {
			let esVideos = await scripts.channel.videos.getAll(app.id)
			if (esVideos.payload.success === true) {
				guides[index].videos = esVideos.payload.data

				let splide = new Splide(`#${guide.slug}`, {
					type: 'loop',
					fixedWidth: '20em',
					autoplay: false
				})

				splide.on('autoplay:playing', function (rate) {
					console.log(rate); // 0-1
				})

				splide.mount(window.splide.Extensions)
			} else {
				alert(esVideos.payload.reason)
			}
		})
	})
</script>

{#if guides && guides.length}
	{#each guides as guide (guide.id)}
		<a href={`/browse/${guide.slug}`}><h1 class="title">{guide.name} →</h1></a>
		<div class={`splide`} id={guide.slug}>
			<div class="splide__track">
				<ul class="splide__list">
					{#if guide.videos && guide.videos.length}
						{#each guide.videos as video (video.id)}
							<li class="splide__slide">
								<div class="tumbnail" style={`background: center center url(${app.uploads}/${video.image})`}></div>
								<a href={`/watch/${video.slug}`} class="name">{video.name}</a>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	{/each}
{/if}

<style>
	.title {
		color: #fff;
    font-size: 3em;
    font-weight: 100;
	}

	.splide {
		margin-bottom: 3em;
	}

	.splide__slide {
		margin: 1em;
		width: 24em !important;
    height: 17em !important;
	}

	:global(.splide__pagination) {
		bottom: -2em;
	}

	.splide__slide .tumbnail {
    height: 13.5em;
    width: 24em;
		background-size: contain !important;
    background-repeat: no-repeat !important;
    background-color: #000 !important;
	}

	.splide__slide .name {
		position: absolute;
		z-index: 10;
    font-size: 1em;
    padding: 1em;
    color: #fff !important;
    background: #000;
		width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
	}

	.splide__slide .name:hover {
		text-decoration: underline;
	}
</style>

