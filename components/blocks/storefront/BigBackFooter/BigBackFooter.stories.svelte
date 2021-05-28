<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../../Example.svelte";
  import BigBackFooter from "./BigBackFooter.svelte";
</script>

<Meta
  title="blocks/storefront/BigBackFooter"
  component={BigBackFooter}
/>

<Template let:args>
  <Example {...args} />
</Template>

<Story
  name="shop.istrav.com"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'BigBackFooter',
    blockArgs: {
      // selected: 'page.homepage',
      menuId: 'footer'
    }
  }}
/>

<Story
  name="shop.oldneckties.com"
  args={{
    domain: 'oldneckties.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'BigBackFooter',
    blockArgs: {
      // selected: 'page.homepage',
      menuId: 'footer'
    }
  }}
/>
