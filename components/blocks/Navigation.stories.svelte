<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../Example.svelte";
  import Navigation from "./Navigation.svelte";
</script>

<Meta
  title="blocks/Navigation"
  component={Navigation}
/>

<Template let:args>
  <div style="min-height: 100vh;">
    <div class="middle">
      <Example {...args} />
    </div>
  </div>
</Template>

<Story
  name="Homepage Selected"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Navigation',
    blockArgs: {
      selected: 'page.homepage',
      menuId: 'main'
    }
  }}
/>

<style>
  .middle {
    right: 0;
    left: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  }
</style>