<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Example from "../../Example.svelte";
  import Login from "./Login.svelte";
</script>

<Meta
  title="blocks/authentication/Login"
  component={Login}
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
    blockName: 'Login',
    blockArgs: {
    }
  }}
/>
