import { Heading } from '@chakra-ui/react';
import '@fontsource/sora/700.css';

export default {
  title: 'Style Guide/Design Tokens/Typography/Heading',
  component: Heading
};

const Template = (args) => <Heading {...args}>{args.label}</Heading>;

export const Heading1 = Template.bind({});
Heading1.args = {
  label: 'Heading 1',
  as: 'h1',
  variant: 'h1'
};

export const Heading2 = Template.bind({});
Heading2.args = {
  label: 'Heading 2',
  as: 'h2',
  variant: 'h2'
};

export const Heading3 = Template.bind({});
Heading3.args = {
  label: 'Heading 3',
  as: 'h3',
  variant: 'h3'
};

export const Heading4 = Template.bind({});
Heading4.args = {
  label: 'Heading 4',
  as: 'h4',
  variant: 'h4'
};
