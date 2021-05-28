<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../../Example.svelte";
  import MyCart from "./MyCart.svelte";
</script>

<Meta
  title="blocks/storefront/MyCart"
  component={MyCart}
/>

<Template let:args>
  <Example {...args} />
</Template>

<Story
  name="shop.istrav.com/cart"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'MyCart',
    blockArgs: {
    }
  }}
/>
