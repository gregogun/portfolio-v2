import { Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default {
  title: 'Style Guide/Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg']
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'primaryThemed', 'secondaryThemed']
      }
    },
    isActive: {
      control: {
        type: 'boolean',
        options: ['true', 'false']
      }
    },
    isDisabled: {
      control: {
        type: 'boolean',
        options: ['true', 'false']
      }
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'BUTTON',
  size: 'md',
  variant: 'primary',
  isActive: false,
  isDisabled: false,
  leftIcon: <CheckCircleIcon />
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'BUTTON',
//   size: 'md',
//   variant: 'secondaryThemed'
// };
