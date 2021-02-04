import VButton from "~/components/VButton.vue";

export default {
  title: "Example/VButton",
  component: VButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "no-style"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<v-button @onClick="onClick" v-bind="$props">Button</v-button>',
});

export const Primary = Template.bind({});
Primary.args = { type: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary" };

export const Large = Template.bind({});
Large.args = { size: "large" };

export const Small = Template.bind({});
Small.args = { size: "small" };
