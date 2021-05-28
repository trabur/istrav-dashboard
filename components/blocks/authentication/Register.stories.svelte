<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import Register from "./Register.svelte";
</script>

<Meta
  title="blocks/authentication/Register"
  component={Register}
/>

<Template let:args>
  <Example {...args} />
</Template>

<Story
  name="input form"
  args={{
    domain: 'istrav.com',
    state: 'production',
    slug: 'homepage',
    blockName: 'Register',
    blockArgs: {
    }
  }}
/>
