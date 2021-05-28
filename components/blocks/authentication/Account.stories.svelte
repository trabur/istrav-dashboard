<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import Account from "./Account.svelte";
</script>

<Meta
  title="blocks/authentication/Account"
  component={Account}
/>

<Template let:args>
  <Example {...args} />
</Template>

<Story
  name="default information"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Account',
    blockArgs: {
    }
  }}
/>
