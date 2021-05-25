<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../Example.svelte";
  import MainFooter from "./MainFooter.svelte";
</script>

<Meta
  title="blocks/MainFooter"
  component={MainFooter}
/>

<Template let:args>
  <div style="min-height: 100vh;">
    <div class="middle">
      <Example {...args} />
    </div>
  </div>
</Template>

<Story
  name="With Marketing Links"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'MainFooter',
    blockArgs: {
      selected: 'page.homepage',
      menuId: 'marketing'
    }
  }}
/>
<Story
  name="With Storefront Links"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'MainFooter',
    blockArgs: {
      selected: 'page.homepage',
      menuId: 'navigation'
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