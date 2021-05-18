<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Wireframe from "./SplashPage2.svelte";
  import Application from "../Application.svelte";
</script>

<Meta
  title="wireframes/SplashPage2"
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
    slug: 'subscribe'
  }}
/>
