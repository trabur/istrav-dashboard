<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Wireframe from "./Generic1.svelte";
  import Application from "../Application.svelte";
</script>

<Meta
  title="wireframes/Generic1"
  component={Wireframe}
/>

<Template let:args>
  {#if args.slug}
    <Application 
      {...args}
    />
  {:else}
    <Wireframe
      {...args}
    />
  {/if}
</Template>

<Story
  name="Show Wiring"
  args={{
    showWiring: true
  }}
/>

<Story 
  name="With Blocks"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'channel'
  }}
/>
