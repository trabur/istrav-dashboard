<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../Example.svelte";
  import Logo from "./Logo.svelte";
</script>

<Meta
  title="blocks/Logo"
  component={Logo}
/>

<Template let:args>
  <div style="min-height: 100vh;">
    <div class="middle">
      <Example {...args} />
    </div>
  </div>
</Template>

<Story
  name="Giant Size"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Logo',
    blockArgs: {
      fontSize: '3em'
    }
  }}
/>

<Story 
  name="Regular Size"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Logo',
    blockArgs: {
      fontSize: '1em'
    }
  }}
/>

<Story 
  name="With Image"
  args={{
    domain: 'tyu67.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Logo',
    blockArgs: {
      height: '10em'
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