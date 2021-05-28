<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import BigFrontHeader from "./BigFrontHeader.svelte";
</script>

<Meta
  title="blocks/storefront/BigFrontHeader"
  component={BigFrontHeader}
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
    blockName: 'BigFrontHeader',
    blockArgs: {
      selected: 'page.homepage',
      menuId: 'main'
    }
  }}
/>

<Story
  name="shop.oldneckties.com"
  args={{
    domain: 'oldneckties.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'BigFrontHeader',
    blockArgs: {
      selected: 'page.homepage',
      menuId: 'main'
    }
  }}
/>
