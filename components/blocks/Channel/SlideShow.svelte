<script>
	import { onMount } from "svelte";

	export let uploads
	// export let appId
	export let guide

	onMount(() => {
		let splide = new Splide(`#${guide.slug}`, {
			type: 'loop',
			fixedWidth: '20em',
			autoplay: false
		})

		splide.on('autoplay:playing', function (rate) {
			console.log(rate); // 0-1
		})

		splide.mount(window.splide.Extensions)
	})
</script>


<a href={`/browse/${guide.slug}`}><h1 class="title">{guide.name} →</h1></a>
<div class={`splide`} id={guide.slug}>
	<div class="splide__track">
		<ul class="splide__list">
			{#if guide.videos && guide.videos.length}
				{#each guide.videos as video (video.id)}
					<li class="splide__slide" data-splide-html-video={`${uploads}/${video.video}`}>
						<div class="tumbnail" style={`background: center center url(${uploads}/${video.image})`}>
							<a href={`/watch/${video.slug}`} class="name">{video.name}</a>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</div>

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
	}

	:global(.splide__pagination) {
		bottom: -2em;
	}

	.splide__slide .tumbnail {
    height: 20em;
    width: 20em;
		background-size: cover !important;
	}

	.splide__slide .tumbnail .name {
		position: absolute;
		z-index: 10;
    font-size: 1em;
    padding: 1em;
    color: #fff;
    background: #000;
	}

	.splide__slide .tumbnail .name:hover {
		text-decoration: underline;
	}
</style>

