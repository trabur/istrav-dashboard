<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import Watch from "./Watch.svelte";
</script>

<Meta
  title="blocks/channel/Watch"
  component={Watch}
/>

<Template let:args>
  <div class="channel">
    <Example {...args} />
  </div>
</Template>

<Story
  name="play video"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Watch',
    blockArgs: {
      slug: 'MUCCIA'
    }
  }}
/>

<style>
  .channel {
    background: #333;
    padding: 1em;
  }
</style>