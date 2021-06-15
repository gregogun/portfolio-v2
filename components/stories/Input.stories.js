import { Input } from '@chakra-ui/react';

export default {
  title: 'Style Guide/Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'me@gregogun.com',
  w: { base: '10rem', xl: '17.5rem' },
  borderRadius: 'sm'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  isInvalid: true
};

export const Flushed = Template.bind({});
Flushed.args = {
  ...Default.args,
  variant: 'flushed'
};
