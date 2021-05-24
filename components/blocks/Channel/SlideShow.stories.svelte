<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import SlideShow from "./SlideShow.svelte";
</script>

<Meta
  title="blocks/channel/SlideShow"
  component={SlideShow}
/>

<Template let:args>
  <div class="movie">
    <Example {...args} />
  </div>
</Template>

<Story
  name="full list"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'SlideShow',
    blockArgs: {
    }
  }}
/>

<style>
  .movie {
    background: #333;
    padding: 1em;
  }
</style>