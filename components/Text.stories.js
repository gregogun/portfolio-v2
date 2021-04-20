import { Text } from '@chakra-ui/react';
import '@fontsource/sora/400.css';

export default {
  title: 'Style Guide/Design Tokens/Typography/Text',
  component: Text
};

const Template = (args) => <Text {...args}>{args.label}</Text>;

export const subtitle = Template.bind({});
subtitle.args = {
  label: 'Subtitle',
  variant: 'subtitle'
};

export const preTitle = Template.bind({});
preTitle.args = {
  label: 'Pre-Title',
  variant: 'preTitle',
  fontWeight: 700
};

export const body = Template.bind({});
body.args = {
  label:
    'Hello, my name is Greg and I am just writing some random stuff to take up space.',
  variant: 'body'
};

export const bodyLight = Template.bind({});
bodyLight.args = {
  label: 'Body Light',
  variant: 'bodyLight',
  fontWeight: 300
};

export const small = Template.bind({});
small.args = {
  label: 'Small',
  variant: 'small'
};
